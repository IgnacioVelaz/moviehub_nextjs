import Container from "@/components/container/container";
import Image from "next/image";

const Login = () => (
  <div>
    <div className="bg-primary flex justify-center p-4 mb-24">
      <Image
        src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700480644/Artboard_1_d1n7j7.png"
        alt="moviehub logo"
        className="h-36"
        height={120}
        width={220}
      />
    </div>
    <Container>
      <div className="grid md:grid-cols-2 items-center gap-6 mb-16">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-2xl">
            Unlock Movie Magic with MovieHub, Your Key to Effortless Movie
            Tracking.
          </p>
          <a href="/api/auth/login">
            <span className="text-3xl">Join for free</span>
          </a>
        </div>
        <Image
          src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700475281/Artboard_1_2x_bftnvr.png"
          alt="Popcorn"
          height={500}
          width={500}
        />
      </div>
    </Container>
    <Container>
      <div className="grid md:grid-cols-2 items-center w-4/5 m-auto mb-16 gap-12">
        <p className="text-2xl text-center md:order-last">
          Powerful search feature! No more guesswork. Just search, click, and
          conquer!
        </p>
        <Image
          className="h-48 m-auto"
          src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700477121/search_illustration_mizmnk.png"
          alt="Search"
          width={192}
          height={192}
        />
      </div>

      <div className="grid md:grid-cols-2 items-center w-4/5 m-auto mb-16">
        <p className="text-2xl text-center">
          Add, organize, and curate your movie picks. Your watchlist, your
          rules!
        </p>
        <Image
          className="h-60 m-auto"
          src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700477121/list_illustration_k6ntg3.png"
          alt="Search"
          width={240}
          height={240}
        />
      </div>

      <div className="grid md:grid-cols-2 items-center w-4/5 m-auto mb-16">
        <p className="text-2xl text-center md:order-last">
          Proudly move movies to your watched list. Because life&apos;s too
          short to miss a good movie. Mark it, watch it, conquer it!
        </p>
        <Image
          className="h-60 m-auto"
          src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700477121/pedestal_illustration_l4hfur.png"
          alt="Search"
          height={240}
          width={240}
        />
      </div>

      <div className="grid md:grid-cols-2 items-center w-4/5 m-auto mb-16">
        <p className="text-2xl text-center">
          Unify your watchlist from all streaming platforms into one harmonious
          hub.
        </p>
        <Image
          className="h-60 m-auto"
          src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700477183/movies_illustration_a0qvz0.png"
          alt="Search"
          height={240}
          width={240}
        />
      </div>
    </Container>
  </div>
);

export default Login;
