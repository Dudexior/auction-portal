# Zadanie na start
## Dzień 2

### Zadanie #1 | Dodawanie nowego komponentu

W projekcie utwórz nowy komponent `main-menu`. Korzystając z cli. Wykorzystaj flagi:
```
--inlineStyle --skipTests
```

Zauważ, że teraz styl CSS do widoku - będzie zawarty w tym samym pliku co logika, a nie wygeneruje się plik z testem.  

Wklej odpowiedni kod dla template **main-menu**:
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <!--
      <li class="nav-item active">
        <a class="nav-link" href="auctions">Aukcje</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="promotions">Promocje</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="advices">Podpowiadamy</a>
      </li>
      -->
    </ul>
  </div>
</nav>
```

W logice: `main-menu.component.ts`, zastanów się jak utworzyć dynamicznie generujące się na widoku linki do menu. Tak aby: Aukcje, Promocje, Podpowiadamy - były zapisane w pliku `.ts` a generowane jako link i tytuł po stronie widoku.

Umieść to wygenerowane menu na stronie głównej projektu tuż pod bannerem z "Auction Portal".

---

### Zadanie #2 | Zestaw ikon na stronie

W projekcie będziemy korzystać z zestawu ikon FontAwesome. Posługując się zaleceniami ze strony:
[fontawesome.com/how-to-use/on-the-web/setup/using-package-managers](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)  

Zainstaluj bibliotekę:
```
@fortawesome/fontawesome-free
```
  
Następnie, aby je dołączyć do projektu trzeba odnaleźć plik `css/all.min.css` w nowo zainstalowanej bibliotece.  

Podpowiedź:
>Musisz przejrzeć katalog nowo-zainstalowanej biblioteki i podać odpowiednią ścieżkę do pliku `all.min.css` w pliku `angular.json` - analogicznie jak robiliśmy to dla `bootstrap` wczoraj.  

Aby potwierdzić że ikony działają umieść na widoku któregoś z komponentów kod:
```html
<i class="fa fa-user"></i>
```
Jeśli pojawi się ikonka z ludzikiem - zadanie zostało wykonane poprawnie.

UWAGA  
**Pamiętaj, że nie jest to optymalny sposób instalacji tych ikon! Istnieje dedykowana instalacja dla Angulara: [angular-fontawesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)** (temat omówimy szerzej w dalszej części szkolenia...)

