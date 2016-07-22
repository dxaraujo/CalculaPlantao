import {Component, Inject} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {PanelComponent} from '../panel.component';
import {FeriadoService} from '../../service';
import {Feriado} from '../../model';

@Component({
    templateUrl: '../../../view/feriado/feriado.list.html',
    directives: [ROUTER_DIRECTIVES]
})
export class FeriadoListComponent extends PanelComponent {

    feriados: Array<Feriado>;

    constructor(
        private _service: FeriadoService
    ) { super(); }

    ngOnInit() {
        this.feriados = this._service.getFeriados();
    }

    apagarFeriado(id) {
        var settings = new Settings();
        sweetAlert(settings, isConfirm => {
            setTimeout(() => {
                if (isConfirm) {
                    this._service.apagarFeriado(id);
                    this.feriados = this._service.getFeriados();
                    swal('Item removido com sucesso', 'Seu trabalho foi concluído', <SweetAlert.AlertType>'success');
                } else {
                    swal('Ação cancelada!', 'Pode voltar com tranquilidade', <SweetAlert.AlertType>'error');
                }
            }, 200);
        });
    }
}

class Settings implements SweetAlert.Settings, SweetAlert.AlertModalSettings {
    title = 'Ao continuar você estará apagando definitivamente este item, deseja proseguir?';
    showConfirmButton = true;
    confirmButtonText = 'Sim, tenho certeza';
    showCancelButton = true;
    cancelButtonText = 'Não, quero voltar';
    type = <SweetAlert.AlertType>'warning';
}
