import { nanoid } from "nanoid";
import Image from "next/image";
import { FC } from "react";

interface StreamingOption {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

interface StreamingOptions {
  link: string;
  rent: StreamingOption[];
  buy: StreamingOption[];
}

type ProvidersListProps = {
  data: StreamingOptions;
};

const ProvidersList: FC<ProvidersListProps> = ({ data }) => {
  const rentOptions = data.rent ? (
    <div className="grid grid-cols-5 gap-3 gap-x-0 mt-4">
      {data.rent &&
        data.rent.map((option: StreamingOption) => (
          <div className="flex justify-center" key={nanoid()}>
            <Image
              src={`https://image.tmdb.org/t/p/original${option.logo_path}`}
              className="w-12 rounded-md"
              alt={`${option.provider_name} logo`}
              width={40}
              height={40}
            />
          </div>
        ))}
    </div>
  ) : (
    "This movie isn't available for rent in your location."
  );

  const buyOptions = data.buy ? (
    <div className="grid grid-cols-5 gap-4 gap-x-0 mt-4">
      {data.buy &&
        data.buy.map((option: StreamingOption) => (
          <div className="flex justify-center" key={nanoid()}>
            <Image
              src={`https://image.tmdb.org/t/p/original${option.logo_path}`}
              className="w-12 rounded-md"
              alt={`${option.provider_name} logo`}
              width={40}
              height={40}
            />
          </div>
        ))}
    </div>
  ) : (
    "This movie isn't available to buy in your location."
  );

  return (
    <section className="flex flex-col gap-6 mt-6">
      <div>
        <h4 className="text-xl uppercase">Rent</h4>
        {rentOptions}
      </div>
      <div>
        <h4 className="text-xl uppercase">Buy</h4>
        {buyOptions}
      </div>
    </section>
  );
};
export default ProvidersList;
