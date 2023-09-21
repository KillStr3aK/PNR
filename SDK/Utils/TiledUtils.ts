export namespace TiledUtil {
    export function NormalizeProperties(properties: any): { [key: string]: any } {
        if (Array.isArray(properties)) {
            return properties.reduce((acc: any, propertyMap: any) => {
                acc[propertyMap.name] = propertyMap.Value;
            }, {});
        } else {
            return properties || {};
        }
    }
}