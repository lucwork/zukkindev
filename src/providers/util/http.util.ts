import {Injectable} from "@angular/core";

@Injectable()
export class HttpUtil {

    public objectToQueryString(obj, prefix = null) {
        var str = [], p;
        for(p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    this.objectToQueryString(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }

        return str.join("&");
    }
}
