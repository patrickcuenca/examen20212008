# Activitat Avaluable

## dilluns, 8 de febrer de 2021 (DAW2)

Aquesta activitat servià per poder valorar si l'alumne ha assolit els coneixement.

Es tracta de fer un clone d'aquest repositori i anar seguint totes les seccions, i a mesura que l'alumne vagi fent el que es demana a cada secció, l'alumne anirà sumant punts.

## Preparació de l'entorn per fer l'activitat

### Comandes per validar la configuració de ***```git```***
```git
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

Crear una carpeta localment al vostre ordinador amb el nom 20210208.

Un cop creada aquesta carpeta, obriu el ```Visual Studio Code```, i obriu la carpeta que acabeu de crear.

L'aspecte que ha de mostrar és similar al aquest.
![imatge_0001.png](imatges\imatge_0001.png)


A continuació cal que obriu una nova finestra de terminal.
![imatge_0002.png](imatges\imatge_0002.png)


Un cop oberta la nova finestra de terminal, cal que escribiu la següent comanda de git:

``` git
git clone https://github.com/eapdagine/MP06_UF03_ActivitatAvaluativa_20210208.git examen20212008
```


![imatge_0003.png](imatges\imatge_0003.png)


D'aquesta manera es crearà una carpeta anomenada examen20212008, a on trobareu tot el codi de l'activitat.

![imatge_0004.png](imatges\imatge_0004.png)

Ara cal que creeu un nou repositori al vostre github amb el nom ```examen20212008```

![imatge_0005.png](imatges\imatge_0005.png)

![imatge_0006.png](imatges\imatge_0006.png)

Arribat a aquest punt, és molt important que guardeu la **url** del vostre repositori.

En el meu exemple aquesta **URL** és ```https://github.com/eapdagine/examen20212008.git```

Ara cal preparar el vincle entre el **repositori local** i el vostre **reposiroti remot a github** que acabeu de crear. Per fer-ho cal que exeecuteu la següent comanda:

``` git
git remote add examen20212008 https://github.com/eapdagine/examen20212008.git
```

Per confirmar que hem creat correctament la connexió entre el repositori local i el remot, podeu executar la comanda:

```git
git remote get-url examen20212008
```

I la **URL** que us torna ha de ser la mateixa del vostre repositori remot al vostre **github**. 

![imatge_0008.png](imatges\imatge_0008.png)

Ara ja podeu "pujar" el **repositori local** que acabeu de crear al vostre **reposiroti remot a github** que acabeu de crear.

Per fer-ho cal que executeu la següent comanda:

```git
git push -u examen20212008 master
```

![imatge_0009.png](imatges\imatge_0009.png)

A partir d'ara ja teniu configurat el vostre entorn per començar a fer tots els passos que es demanen a l'activitat avaluativa.


