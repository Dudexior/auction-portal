# Zadanie na start
## Dzień 3

### Zadanie #1 | Strona z promocjami

#### 1.1 Utwórz nowy komponent `promotions-page`:
- zastanów się w jakim module powinien być umiejscowiony. 
- jego _template_ i _style_ - powinny być w jednym pliku
- nie generuj testu dla tego komponentu

#### 1.2 Dodaj komponent do routingu:
Link `/promotions` powinien pokazywać na `promotions-page`. Podepnij komponent do tablicy routingu podobnie jak robiliśmy to z `auctions-page`. Sprawdź czy link w menu działa poprawnie.

---

### Zadanie #2 | Dalszy podział na _features modules_

> Chcemy aby strony:  
> *Podpowiadamy*, *Dodaj aukcje* i *Koszyk* - działały.

#### 2.1 Nowy moduł `advice`:

Pamiętaj, że chcemy podzielić naszą aplikację na jeszcze jedną część: *Blog z artykułami "Podpowiadamy"*.

Tak więc, musimy przygotować komponent `advices-page`, jednak będzie on _"zamieszkiwał"_ inny moduł niż **auction**.

Przygotuj nowy moduł + routing `advice`.  
Korzystając z GUI do **Angular Schematics** wykorzystaj opcję *Classic module of pages*.  
(polecenie utworzenia modułu powinno zawierać flagi `--routing --module app`)

#### 2.2 Nowa strona `advices-page`:

Dodaj nowy komponent do modułu `advice` nazwij go `advices-page`, styl powinien być inline

Połącz komponent z tablicą routingu analogicznie do tego jak robiliśmy to w module `auction`

Teraz wszystkie strony: *Aukcje* *Promocje* *Podpowiadamy*, powinny poprawnie odprowadzać do swoich komponentów `*-page`  

---

### Zadanie #3 | Dokończenie routingu stron w module auction

#### 3.1 Buttony w menu:

Dodaj na koniec widoku `main-menu` kod HTML pomiędzy jego znacznikami:
```html
....
    </div>
    <!-- tutaj -->
</nav>
```
Kod z buttonami do dodania:
```html
<div class="text-light">
  <a class="btn btn-primary">
    <i class="fa fa-plus"></i> Dodaj
  </a>
  <a class="btn btn-secondary ml-2">
    <i class="fa fa-shopping-basket"></i> Koszyk
  </a>
</div>
```

Już na tym etapie możesz dodać odpowiednie linki do podstron np.
`add-auction` oraz `shopping-cart`

#### 3.2 Uzupełnienie stron:

Dodaj w module `auction` dwa nowe komponenty: `add-auction-page` oraz `shopping-cart-page` wygeneruj je ze stylami inline i bez testów

#### 3.3 Routing

Podłącz strony z routingiem i menu (przyciski).

#### 3.4 Widoki do stron

Wejdź na przygotowaną stronę [https://codesandbox.io/s/auction-portal-htmls-ulkx1](https://codesandbox.io/s/auction-portal-htmls-ulkx1)  
Przekopiuj HTML dla `add-auction-page` oraz dla `advices-page` z załączonych tam stron  
*add-auction.html* oraz *advices-site.html*
