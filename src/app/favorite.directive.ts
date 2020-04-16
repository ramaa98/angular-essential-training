import { Directive, HostBinding, Host } from '@angular/core';

@Directive ({
    selector: '[mwFavorite]'
})

export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true; 
}