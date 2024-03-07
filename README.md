# BTFG Module

Babele Translation Files Generator

![Foundry v11](https://img.shields.io/badge/foundry-v11-green)

_（中文）_

该模块允许您生成纲要的JSON翻译文件，以方便实施
系统和/或模块的翻译。

可以处理任何类型的概要并使用映射定义个性化导出的文件
Babele（用于“Actor”、“Item”和“Adventure”概要）。

## 更新
为所有的文件夹添加了映射

## 安装
您可以使用其清单链接添加它：
`https://github.com/monthwolf/foundryvtt-babele-translation-files-generator/releases/latest/download/module.json`

## 用法

打开概要并单击窗口标题中的下载图标。然后将出现一个配置对话框，允许您开始导出翻译文件。
还可以通过运行包含以下内容的宏来通过拖放来启动纲要的选择窗口

以下是脚本：`game.babeleFilesGenerator.api.compendiumExporter.selectPack();`

如果您已经有一个翻译文件，您可以选择它来获取一个新的、最新的文件，其中将包含
您已经完成的翻译以及文件中不存在的任何新翻译。
最后，一个复选框还允许您生成一个工作 Foundry 模块的示例，该示例允许您
在世界中快速测试您的翻译文件。


_(English version below)_

---

Ce module permet de générer le fichier de traduction JSON d’un compendium afin de faciliter la mise en place de
traductions pour des systèmes et/ou modules.

Il est possible de traiter n’importe quel type de compendium et de personnaliser le fichier exporté grâce à la
définition de mapping pour Babele (pour les compendiums `Actor`, `Item` et `Adventure`).

## Installation

Le système est installable directement depuis Foundry en recherchant son nom : `Babele Translation Files Generator`.
Vous aurez alors la dernière version et profiterez des mises à jour automatiques.

Sinon, il est possible l’ajouter en utilisant le lien de son manifest :
`https://github.com/DjLeChuck/foundryvtt-babele-translation-files-generator/releases/latest/download/module.json`

## Utilisation

Ouvrez un compendium et cliquer sur l’icône de téléchargement en en-tête de fenêtre. Une dialogue de configuration
apparaîtra alors et permettra de lancer l’export du fichier de traduction.

Il est également possible de lancer une fenêtre de sélection du compendium par glisser-déposer en exécutant une macro
contenant le script suivant : `game.babeleFilesGenerator.api.compendiumExporter.selectPack();`

Si vous possédez déjà un fichier de traduction, vous pourrez le sélectionner afin d’en obtenir un nouveau à jour qui
contiendra les traductions que vous avez déjà effectuées ainsi que les nouvelles non présentes dans votre fichier.

Enfin, une case à cocher vous permettra également de générer directement un module Foundry d’exemple fonctionnel qui
vous permettra de tester rapidement votre fichier de traduction dans un monde.

## Comment contribuer ?

### Rapport de bug

Merci d’ouvrir un ticket : https://github.com/DjLeChuck/foundryvtt-babele-translation-files-generator/issues

Vous pouvez aussi proposer un fix via une pull
request : https://github.com/DjLeChuck/foundryvtt-babele-translation-files-generator/pulls

---

_(English version)_

This module allows you to generate the JSON translation file of a compendium in order to facilitate the implementation
of translations for systems and/or modules.

It is possible to process any type of compendium and personalize the exported file using the mapping definition for
Babele (for `Actor`, `Item` and `Adventure` compendiums).

## Installation

The system can be installed directly from Foundry by searching for its name: `Babele Translation Files Generator`.
You'll then have the latest version and benefit from automatic updates.

Alternatively, you can add it using its manifest link:
`https://github.com/DjLeChuck/foundryvtt-babele-translation-files-generator/releases/latest/download/module.json`

## Usage

Open a compendium and click on the download icon in the window header. A configuration dialog will then appear, allowing
you to start the export of the translation file.

It is also possible to launch a selection window of the compendium by drag-and-drop by running a macro containing the
following script: `game.babeleFilesGenerator.api.compendiumExporter.selectPack();`

If you already have a translation file, you can select it to obtain a new, up-to-date one which will contain the
translations you have already made as well as any new ones not present in your file.

Finally, a checkbox will also allow you to generate an example of a working Foundry module that will allow you to
quickly test your translation file in a world.

## How to contribute?

### Bug report

Please open a ticket: https://github.com/DjLeChuck/foundryvtt-babele-translation-files-generator/issues

You can also propose a fix via a pull
request: https://github.com/DjLeChuck/foundryvtt-babele-translation-files-generator/pulls
