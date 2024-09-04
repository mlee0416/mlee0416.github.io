/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pokemontcg.io",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
        port: "",
        pathname: "/artwork/large/**",
      },
      {
        protocol: "https",
        hostname: "a.espncdn.com",
        port: "",
        pathname: "/combiner/i?img=/i/teamlogos/nfl/500/**",
      },
      {
        protocol: "https",
        hostname: "static.www.nfl.com",
        port: "",
        pathname: "/image/private/f_auto/league/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/nflleague/image/private/f_auto/**",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
        port: "",
        pathname: "jpg/03/48/39/74/**",
      },
    ],
  },
};

export default nextConfig;
