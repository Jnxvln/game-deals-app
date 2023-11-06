import CodeViewer from "@/lib/components/ui/CodeViewer/CodeViewer";
import Header from "@/lib/components/ui/Header/Header";

export default function Home() {
  const appTitle = "Game Centric";

  const codeString = `[
    {
      "internalName": "THIEFDEADLYSHADOWS",
      "title": "Thief: Deadly Shadows",
      "metacriticLink": "/game/pc/thief-deadly-shadows",
      "dealID": "EX0oH20b7A1H2YiVjvVx5A0HH%2F4etw3x%2F6YMGVPpKbA%3D",
      "storeID": "1",
      "gameID": "396",
      "salePrice": "0.98",
      "normalPrice": "8.99",
      "isOnSale": "1",
      "savings": "89.098999",
      "metacriticScore": "85",
      "steamRatingText": "Very Positive",
      "steamRatingPercent": "81",
      "steamRatingCount": "1670",
      "steamAppID": "6980",
      "releaseDate": 1085443200,
      "lastChange": 1621540561,
      "dealRating": "9.4",
      "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/6980/capsule_sm_120.jpg?t=1592493801"
    },
  ]`;

  return (
    <main>
      <Header title={appTitle} />
      <div className="p-12 text-center text-2xl">
        <div className="max-w-3xl m-auto">
          <strong>{appTitle}</strong> is a simple app designed to showcase the use of
          fetching data from the{" "}
          <a href="https://apidocs.cheapshark.com/" target="_blank">
            CheapShark API
          </a>{" "}
          using NextJS 13.
        </div>
      </div>

      <div className="flex flex-wrap bg-slate-300">
        <div className="p-12 flex-grow border border-dashed border-gray-600">
          <div className="text-2xl mb-4 font-bold">CheapShark API (Example)</div>
          <div>
            <a
              href="https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
              target="_blank"
              title="A sample API endpoint to show games from Steam that are $15 or less"
              className="underline"
            >
              https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15
            </a>
          </div>
          <div className="mt-4">
            Check the docs for more information, but basically <strong>storeID</strong>{" "}
            identifies which online platform to find deals for, where `1` is Steam.
          </div>
          <div className="mt-4">
            The second parameter, <strong>upperPrice=15</strong> sets the ceiling price,
            so this query will find games that are $15 or less.
          </div>
        </div>

        <div className="p-12 flex-grow border border-dashed border-gray-600">
          <div className="text-2xl mb-4 font-bold">Sample Output</div>
          <div className="text-sm max-w-3xl">
            <CodeViewer codeString={codeString} />
          </div>
        </div>
      </div>
    </main>
  );
}
