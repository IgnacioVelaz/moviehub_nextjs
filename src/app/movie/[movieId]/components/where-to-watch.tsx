import { UserCountry } from "@/utils/get-country-data";
import { getStreamingOptions } from "@/services/tmdb.service";
import ProvidersList from "./providers-list";

type WhereTowatchProps = {
  userCountry: UserCountry;
  movieId: number;
  movieTitle: string;
};

const WhereToWatch = async ({
  userCountry,
  movieId,
  movieTitle,
}: WhereTowatchProps) => {
  const { name: countryName, code: countryCode } = userCountry;

  const streamingOptions = await getStreamingOptions(countryCode, movieId);

  return (
    <>
      <h3 className="text-lg tracking-wide">
        Where to stream <span className="font-bold">{movieTitle}</span> in
        <span className="font-bold"> {countryName}</span>
      </h3>
      {streamingOptions && <ProvidersList data={streamingOptions} />}
    </>
  );
};
export default WhereToWatch;
