import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { SyncLoader } from "react-spinners";
import { MdClear } from "react-icons/md";
import { IoReturnUpBack } from "react-icons/io5";
import { fetchApi, formatForMD, id, initializeWebSocket } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Counter } from "@/components/Counter";

export const MSG_LOADING_CONNECTING = "Calling the wise ones";
export const MSG_DONE = "Here is what I found:";

interface DeepSearchProps {
  onSearchActivated: (activated: boolean) => void;
  searchActivated: boolean;
  backOn?: boolean;
  placeholder?: string;
}

const DeepSearch: React.FC<DeepSearchProps> = ({
  onSearchActivated,
  searchActivated,
  backOn = false,
  placeholder = "Type a question + hit Enter",
}) => {
  const [initialized, setInitialized] = useState(false);
  const [loading, _setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState<string | null>(null);
  const [results, _setResults] = useState<any | null>(null);
  const [firstChunkReceived, setFirstChunkReceived] = useState(false);

  const resultsRef = React.useRef(results);
  const statusRef = React.useRef<string | null>(null);
  const loadingRef = React.useRef(loading);

  const setData = (value: string) => {
    resultsRef.current = { output: value };
    _setResults(resultsRef.current);
  };

  const setLoading = (value: boolean) => {
    loadingRef.current = value;
    _setLoading(loadingRef.current);
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams?.get("q");

  const handleSearch = async (input: string, updateUrl = true) => {
    if (loading) return;

    setSearchInput(input);
    setLoading(true);

    updateUrl && updateParams();

    let json;
    let error = null;
    try {
      // const response = {"error": "ett"}
      const requestId = id();

      initializeWebSocket(requestId, (response) => {
        const ws = response;

        if (ws.t == "r") {
          setData("");
        } else if (ws.t == "c") {
          !firstChunkReceived && setFirstChunkReceived(true);
          const val = ws.v;
          const data = resultsRef.current.output;
          if (val) setData((data ? data : "") + val);
        } else if (ws.t == "o") {
          !firstChunkReceived && setFirstChunkReceived(true);
          const val = ws.v;
          if (val) setData(val);
        } else if (ws.t == "s") {
          statusRef.current = ws.v;
        }
      });

      statusRef.current = MSG_LOADING_CONNECTING;

      const response = await fetchApi("askd", {
        id: requestId,
        source: "https://pnt.is",
        question: input,
        lang: "en",
      });

      statusRef.current = MSG_DONE;

      error = response.statusText;
      json = await response.json();
      // const response = {
      //     "id": null,
      //     "link": null,
      //     "output": "**TETDD Soldering Tip by Apex Tool Group:**\n\n- Manufacturer: Apex Tool Group\n- Model: TETDD\n- Description: Weller, Tip, Solder, 0.187 in, Single Flat, Soldering Pencil\n- Key Features:\n  - ET series tip for PES51 soldering pencil\n  - Sensor hole in the base of tip fitted with a stainless steel liner\n  - Prevents the tip from seizing to the sensor\n\n**Availability and Pricing:**\n\n- Compare bulk discounts from 6 distributors, including DigiKey, Octopart, Zoro, Motion, Radwell, and Jameco Electronics.\n- Model: TETDD | UPC: 037103478092\n- Prices range from $4.65 to $10.00, depending on the distributor and quantity.\n\n**Technical Resources:**\n\n- PCB footprints, schematic symbols, and datasheets available on SnapEDA for both Apex Tool Group and Weller versions of TETDD.\n- Instructional activities and teaching resources for TETDD can be found on TEDD (Teacher Education by Design) platform.\n\n**Lead Time:**\n\nApex Tool Group, the manufacturer of TETDD, typically has a standard lead time for their products. However, this may vary depending on the distributor and current inventory levels. It's recommended to check with the specific distributor for accurate lead time information.",
      //     "tokens_digested": 2402,
      //     "tokens_generated": 287,
      //     "compression": 0.11948376353039133
      // }
      // error = null
      // json = response;
    } catch (e) {
      json = { error: error || "Really need a break.. See you soon." };
    }
    _setResults(json);
    setLoading(false);
  };

  if (!initialized && q != null) {
    setInitialized(true);
    handleSearch(q, false).then();
  }

  useEffect(() => {
    if (searchActivated) {
      onSearchActivated(true);
    } else {
      setSearchInput(null);
      _setResults(null);
    }
  }, [searchActivated, onSearchActivated]);

  const updateParams = () => {
    if (!backOn) {
      const value = searchInput || q;
      // @ts-ignore
      router.push(`/search` + (value ? `?q=${value}` : ""), { shallow: true });
    }
  };

  const resetSearch = () => {
    setSearchInput(null);
    updateParams();
  };

  return (
    <Suspense>
      <div
        className={`${
          searchActivated ? "pnt_search_active" : "pnt_search"
        } py-4`}
      >
        {searchActivated && (
          <div className="pb-4">
            <h2 className="text-center pb-4 text-xl tracking-tighter sm:text-xl md:text-2xl dark:text-white">
              <b>Answers</b>
              <sup> Preview</sup>
            </h2>
            {/*<text>no ads or teasers; just AI powered web search</text>*/}
          </div>
        )}
        <div>
          <div
            className="text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", position: "relative" }}
              className="px-5 w-full md:w-4/5 lg:2/3 xl:w-1/2"
            >
              {searchActivated && backOn && (
                <IoReturnUpBack
                  className="pnt_search_back"
                  aria-description="Exit"
                  onClick={() => onSearchActivated(false)}
                />
              )}
              <Input
                // key={searchInput}
                onFocus={() => onSearchActivated(true)}
                onKeyDown={async (e) => {
                  if (e.key === "Enter") {
                    // @ts-ignore
                    await handleSearch(e.target.value);
                  } else if (e.key === "Escape") {
                    onSearchActivated(false);
                  }
                }}
                // defaultValue={q || ''}
                value={searchInput || (initialized ? "" : q || "")}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                className="dark:bg-custom-dark dark:text-white border-b-custom-darker pnt_search_input px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 bg-white rounded-md"
                placeholder={placeholder}
              />
              {searchInput && (
                <MdClear className="pnt_search_clear" onClick={resetSearch} />
              )}
            </div>
          </div>

          <div>
            {(loading || results?.output) && (
              <div className="status text-left pl-6 px-12 md:px-32 lg:px-42 xl:px-60 text-gray-500">
                <div className="status_text">{statusRef.current}</div>
                {loading ? <span className="glow dots" /> : ""}
                {/*<Counter running={loading}/>*/}
              </div>
            )}

            {results && searchActivated && (
              <div
                key={results?.output || "1"}
                // className="pnt_content text-left pt-4 px-12 md:text-xl/relaxed md:px-30 lg:text-xl/relaxed lg:px-30 xl:text-xl/relaxed xl:px-30">
                className="pnt_content text-left pt-4 px-12 md:px-32 lg:px-42 xl:px-60 dark:!text-white"
              >
                <Markdown remarkPlugins={[remarkGfm]}>
                  {!results
                    ? "Loading.."
                    : formatForMD(results.error || results.output)}
                </Markdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default DeepSearch;
