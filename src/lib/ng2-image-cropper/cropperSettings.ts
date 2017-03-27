import {CropperDrawSettings} from "./cropperDrawSettings";

export interface ICropperSettings {
    canvasWidth?: number;
    canvasHeight?: number;
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    minWithRelativeToResolution?: boolean;
    croppedWidth?: number;
    croppedHeight?: number;
    touchRadius?: number;
    cropperDrawSettings?: any;
    noFileInput?: boolean;
    allowedFilesRegex?: RegExp;
    rounded: boolean;
    keepAspect: boolean;
    preserveSize: boolean;
    compressRatio: number;
    responsive: boolean;
}

export class CropperSettings implements ICropperSettings {


    public canvasWidth: number = 300;
    public canvasHeight: number = 300;

    public dynamicSizing: boolean = false;
    public cropperClass: string;
    public croppingClass: string;

    public width: number = 200;
    public height: number = 200;

    public minWidth: number = 50;
    public minHeight: number = 50;
    public minWithRelativeToResolution: boolean = true;

    public croppedWidth: number = 100;
    public croppedHeight: number = 100;

    public cropperDrawSettings: CropperDrawSettings = new CropperDrawSettings();
    public touchRadius: number = 20;
    public noFileInput: boolean = false;

    public fileType:string;

    public resampleFn:Function;

    public allowedFilesRegex: RegExp = /\.(jpe?g|png|gif)$/i;
    public preserveSize: boolean = false;

    public compressRatio:number = 1.0;
    public responsive: boolean = false;

    private _rounded: boolean = false;
    private _keepAspect: boolean = true;


    constructor() {
        // init
    }

    set rounded(val: boolean) {
        this._rounded = val;
        if (val) {
            this._keepAspect = true;
        }
    }

    get rounded(): boolean {
        return this._rounded;
    }

    set keepAspect(val: boolean) {
        if (val === false && this._rounded) {
            throw new Error("Cannot set keep aspect to false on rounded cropper. Ellipsis not supported");
        }

        this._keepAspect = val;
    }

    get keepAspect(): boolean {
        return this._keepAspect;
    }
}
