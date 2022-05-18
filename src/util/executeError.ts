/**
 * 服务器执行请求失败的Error
 */
export default class ExecuteError<T = Object> extends Error {
    res?: ServerResJSON<T>;
    status?: Number;

    /**
     * @param msg 要告知用户的错误信息
     * @param res 服务器返回的JSON
     */
    constructor(msg: string, res?: ServerResJSON<T>) {
        super('' + msg);
        this.res = res;
        this.status = res?.code;
    }

    valueOf() {
        return {
            message: this.message,
            res: this.res,
            status: this.status,
        }
    }
};