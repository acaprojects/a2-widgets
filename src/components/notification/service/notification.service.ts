import { Injectable, ComponentResolver, ComponentRef, ReflectiveInjector, ViewContainerRef, ResolvedReflectiveProvider, Type } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { Notification } from './notification.component';

@Injectable()
export class NotificationService {

  	public defaultVC: ViewContainerRef = null;
  	colors: { fg: string, bg: string } = {
  		fg: '#FFF',
  		bg: '#123456'
  	};
  	cmp: Notification = null;
  	cmpRef: ComponentRef<Notification> = null;
  	private vc: ViewContainerRef = null;

	constructor(private _cr: ComponentResolver, private app: ApplicationRef) {

	}

	ngOnInit() {

	}

	set view(view: ViewContainerRef) {
		this.vc = view;
		let bindings = ReflectiveInjector.resolve([]);
		this.render(Notification, this.vc, bindings);
	}


	add(msg:string, cssClass?:string, opts?:any) {
		if(!this.cmp) return null;
		console.log('Add notification');
		return this.cmp.add(msg, cssClass, opts);
	}

	close(id:string) {
		if(!this.cmp) return null;
		return this.cmp.close(id);
	}

	clear() {
		if(!this.cmp) return null;
		setTimeout(() => {
			this.cmp.clear();
		}, 100);
		return 0
	}

    canClose(state: boolean, timeout: number = 2000) {
    	if(this.cmp) this.cmp.setClose(state, timeout);
    }

    private render(type: Type, viewContainer: ViewContainerRef, bindings: ResolvedReflectiveProvider[]){
    	if(viewContainer) {
	        return this._cr.resolveComponent(type)
	            .then(cmpFactory => {
	                const ctxInjector = viewContainer.parentInjector;
	                const childInjector = Array.isArray(bindings) && bindings.length > 0 ?
	                    ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
	                return viewContainer.createComponent(cmpFactory, viewContainer.length, childInjector);
	            })
	            .then((cmpRef: ComponentRef<any>) => {
	                document.body.appendChild(cmpRef.location.nativeElement);
	            	this.cmp = cmpRef.instance;
	            	this.cmpRef = cmpRef;
	            	return this.cmp;
	            });
        }
    }

}