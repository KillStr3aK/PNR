export namespace UUIDUtils
{
    export function Generate() {
        return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 0x10 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(0x10);
        });
    }
}