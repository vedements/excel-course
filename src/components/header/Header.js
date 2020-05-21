import {ExcelComponent} from '@core/ExcelComponent'
export class Header extends ExcelComponent {
  static className = 'excel__header'
  // Возвращает шаблон компонента
  toHTML() {
    return `
    <input type= "text" value="Новая таблица" class="input" />

    <div>
      <div class="button">
        <i class="material-icons">
          delete
          </i>
      </div>
    
    <div class="button">
      <i class="material-icons">
        exit_to_app
        </i>
    </div>
  </div>`
  }
}
