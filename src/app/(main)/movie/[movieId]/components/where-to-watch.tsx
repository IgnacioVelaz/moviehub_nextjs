import { UserCountry } from "@/utils/get-country-data";

type WhereTowatchProps = {
  userCountry: UserCountry;
  movieId: number;
};

const WhereToWatch = ({ userCountry, movieId }: WhereTowatchProps) => {
  const { name: countryName, code: countryCode } = userCountry;

  console.log(movieId);

  return (
    <>
      <h3>Where to stream in {countryName}</h3>
      <h2>{countryCode}</h2>
    </>
  );
};
export default WhereToWatch;
