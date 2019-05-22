# Betriebsssysteme-Übung

Implementiert mithilfe von JavaScript und dem Visualisierungs-Framework [D3.js](https://d3js.org/).

### Funktionsweise

Öffnen der Datei `index.html` in einem Browser, getestet ausschließlich in Google Chrome aufgrund der optimalsten ECMAScript-Sprachunterstützung.

Klicken in einen farbigen Sektor zoomt herein, klicken in die weiße leere Mitte der Visualisierung zoomt heraus.

### Grenzen der Visualisierung

Das Rendering von 65536 Dateiblöcken und derer Belegungsanzeige in den anderen Sektoren überfordert die JavaScript-Engine, sodass ein stark verkleinertes und vereinfachtes System dargestellt wird:
* Jede Datei hat eine feste Größe von zwei Datenblöcken
* Es sind maximal 16 Dateien zugelassen

