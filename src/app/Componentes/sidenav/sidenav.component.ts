import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {
	mobileQuery: MediaQueryList;

	fillerNav = ['Categorias', 'Productos', 'Ofertas', 'Compras', 'Vender', 'Perfil', 'Salir'];

	private _mobileQueryListener: () => void;

	constructor(
		changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
		private router: Router
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
		this.router.navigate(['/Ecommerce/PaginaPrincipal']);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	Redirect(url: string) {
		try {
			if (url == 'Salir') {
				this.LogOut()
			} else {
				this.router.navigate(['Ecommerce/' + url])
			}
		} catch (error) {
			switch (url) {
				case 'Ofertas':
					this.router.navigate(['Ecommerce/Productos'])
					break;
				case 'Compras':
					this.router.navigate(['Ecommerce/Productos'])
					break;
			}
		}
	}

	LogOut() {
		localStorage.clear()
		this.router.navigate(['/'])
	}

	ReturnHome(){
		this.router.navigate(['/Ecommerce/PaginaPrincipal'])
	}

}
