import { getPayloadUtil } from "@/lib/utils";

export const fetchLocation = async () => {
    const payload = await getPayloadUtil()
    const locations = await payload.findGlobal({
        slug: 'shopLocations',
        depth: 3,
    });

    return locations.locations;
}