# Betriebssysteme-Übung

Implementiert mithilfe von JavaScript und dem Visualisierungs-Framework [D3.js](https://d3js.org/).

D3 ist das meistgenutzteste Datenvisualisierungsframework für JavaScript und wird beispielsweise von der Hochschule Karlsruhe für die [Visualisierung der Modulabhängigkeiten](http://www.iwi.hs-karlsruhe.de/iwii/info/moduledependencies/INFB/0) genutzt.

### Funktionsweise

Öffnen der Datei `index.html` in einem Browser, getestet ausschließlich in Google Chrome aufgrund der optimalsten ECMAScript-Sprachunterstützung.

Das Klicken in einen farbigen Sektor zoomt herein, das Klicken in die weiße leere Mitte der Visualisierung zoomt heraus. Das Zoomen ist jedoch nur für die Betrachtung der Datei-Informationen im Rootverzeichnis wichtig.

Welche FUSE-Methoden aufgerufen werden, wird in der Browserkonsole ausgegeben. Bei Chrome ist die Konsole in den [Entwicklertools](https://developers.google.com/web/tools/chrome-devtools/).

Fehlermeldungen werden ebenfalls in der Browserkonsole ausgegeben.

### Grenzen der Visualisierung

Das Rendering von 65536 Datenblöcken und derer Belegungsanzeige in den anderen Sektoren überfordert die JavaScript-Engine, sodass ein stark verkleinertes und vereinfachtes System dargestellt wird:
* Jede Datei hat eine Größe von zwei Datenblöcken
* Es sind maximal 16 Dateien zugelassen
* Damit das Zusammenspiel zwischen den stark verkleinerten Sektoren besser veranschaulicht wird, werden die zu beschreibenden Datenblöcke per Zufallsgenerator bestimmt
* Die FAT wird im Idealfall durch eine verlinkte Liste implementiert: Da jedoch immer nur zwei Elemente verlinkt werden, wurde auf diese Datenstruktur verzichtet

