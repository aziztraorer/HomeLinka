import { Resolver } from "dns/promises";

const resolver = new Resolver();

resolver.setServers(["8.8.8.8"]);

try {
  const result = await resolver.resolveSrv(
    "_mongodb._tcp.homelinka.7tx8if8.mongodb.net"
  );

  console.log(result);
} catch (error) {
  console.error(error);
}