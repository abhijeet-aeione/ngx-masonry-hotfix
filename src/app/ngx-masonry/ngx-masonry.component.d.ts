import { OnInit, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { NgxMasonryOptions } from './ngx-masonry-options.interface';
export declare class NgxMasonryComponent implements OnInit, OnDestroy {
    private platformId;
    private _element;
    constructor(platformId: any, _element: ElementRef);
    _msnry: any;
    options: NgxMasonryOptions;
    useImagesLoaded: Boolean;
    layoutComplete: EventEmitter<any[]>;
    removeComplete: EventEmitter<any[]>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    layout(): void;
    reloadItems(): void;
    add(element: HTMLElement): void;
    remove(element: HTMLElement): void;
}
