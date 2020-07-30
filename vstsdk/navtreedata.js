/*
@ @licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2017 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "VST 3 SDK", "index.html", [
    [ "Introduction", "index.html", [
      [ "Welcome to VST SDK 3.7", "index.html#vst3sdkIntro", null ],
      [ "Change History", "index.html#changes", null ],
      [ "About VST Plug-ins in general", "index.html#vstPlugGeneral", null ],
      [ "About VST 3", "index.html#vst3General", null ]
    ] ],
    [ "Frequently Asked Questions", "faq.html", [
      [ "Communication", "faq.html#faqCommunication", [
        [ "Q: How should I communicate between the 'Processing' and the 'User Interface'?", "faq.html#faqCommunication1", null ],
        [ "Q: I want to implement an audio meter in my user interface. How do I do this?", "faq.html#faqCommunication2", null ],
        [ "Q: How does the host send automation data to my VST 3 plug-in?", "faq.html#faqCommunication3", null ],
        [ "Q: How report to the host that the plug-in has new parameter titles?", "faq.html#faqCommunication4", null ],
        [ "Q: How receive MIDI Controllers from the host?", "faq.html#faqCommunication5", null ],
        [ "Q: How my parameter changes (from UI interaction) are send to the processor if the host does not process?", "faq.html#faqCommunication6", null ]
      ] ],
      [ "Processing", "faq.html#faqProcessing", [
        [ "Q: How does Audio Processing Bypass work?", "faq.html#faqProcessing1", null ],
        [ "Q: Must the host deliver valid initialized Audio buffers if the associated bus is deactivated?", "faq.html#faqProcessing2", null ],
        [ "Q: Can the maximum sample block size change while the plug-in is processing?", "faq.html#faqProcessing3", null ],
        [ "Q: Can the sample rate change while the plug-in is processing?", "faq.html#faqProcessing4", null ],
        [ "Q: Could the host call the process function without Audio buffers?", "faq.html#faqProcessing5", null ],
        [ "Q: What is a Side-chain?", "faq.html#faqProcessing6", null ],
        [ "Q: How can I implement a Side-chain path into my plug-in?", "faq.html#faqProcessing7", null ],
        [ "Q: My plug-in is capable of processing all possible channel configurations.", "faq.html#faqProcessing8", null ],
        [ "Q: How are speaker arrangement settings handled for FX plug-ins?", "faq.html#faqProcessing9", null ],
        [ "Q: My plug-in has mono input and stereo output. How does VST 3 handle this?", "faq.html#faqProcessing10", null ],
        [ "Q: How does it work with silence flags?", "faq.html#faqProcessing11", null ],
        [ "Q: How report to the host that the plug-in latency has changed?", "faq.html#faqProcessing12", null ],
        [ "Q: How report to the host that the plug-in Arrangement has changed?", "faq.html#faqProcessing13", null ],
        [ "Q: Can IAudioProcessor::setProcessing be called without any IAudioProcessor::process call?", "faq.html#faqProcessing14", null ],
        [ "Q: How to make sure that a plug-in is always processed?", "faq.html#faqProcessing15", null ],
        [ "Q: Can IComponent::getState()/setState() be called during processing?", "faq.html#faqProcessing16", null ],
        [ "Q: How can a plug-in be informed that it is currently processed in offline processing?", "faq.html#faqProcessing17", null ],
        [ "Q: What should I NOT call in the realtime process function?", "faq.html#faqProcessing18", null ]
      ] ],
      [ "GUI-Editor", "faq.html#faqEditor", [
        [ "Q: The host doesn't open my plug-in UI, why?", "faq.html#faqEditor1", null ]
      ] ],
      [ "Compatibility with VST 2.x or VST 1", "faq.html#faqVst2", [
        [ "Q: How can I update my VST 2 version of my plug-in to a VST 3 version and be sure that Cubase will load it instead of my old one?", "faq.html#faqVst2q1", null ],
        [ "Q: How can I support projects which were saved with the VST 2 version of my plug-in?", "faq.html#faqVst2q2", null ],
        [ "Q: In VST 2 the editor was able to access the processing part, named effect, directly. How can I do this in VST 3?", "faq.html#faqVst2q3", null ],
        [ "Q: Does VST 3 implement methods like beginEdit and endEdit known from VST 2?", "faq.html#faqVst2q4", null ],
        [ "Q: Does VST 3 include variable Input/Output processing like processVariableIo of VST 2?", "faq.html#faqVst2q5", null ],
        [ "Q: What is the equivalent to the VST 2 kPlugCategOfflineProcess?", "faq.html#faqVst2q6", null ]
      ] ],
      [ "Persistence", "faq.html#faqPersistence", [
        [ "Q: How does persistence work?", "faq.html#faqPersistence1", null ],
        [ "Q: What's the difference between IEditController::setComponentState and IEditController::setState?", "faq.html#faqPersistence2", null ]
      ] ],
      [ "Miscellaneous", "faq.html#faqMiscellaneous", [
        [ "Q: How is a normalized value converted to a discrete integer value in VST 3?", "faq.html#faqMiscellaneous1", null ],
        [ "Q: What is the return value tresult?", "faq.html#faqMiscellaneous2", null ],
        [ "Q: Which version of Steinberg Sequencers support VST 3?", "faq.html#faqMiscellaneous3", null ],
        [ "Q: How are the different Speakers located?", "faq.html#faqMiscellaneous4", null ],
        [ "Q: Why do plug-ins need subcategories?", "faq.html#faqMiscellaneous5", null ],
        [ "Q: Is it possible to define a plug-in as Fx and Instrument?", "faq.html#faqMiscellaneous6", null ],
        [ "Q: Is it possible to ask a plug-in about which speaker arrangements are supported?", "faq.html#faqMiscellaneous7", null ],
        [ "Q: Which version of Steinberg Sequencers support VST 3 Note Expression?", "faq.html#faqMiscellaneous8", null ],
        [ "Q: When compiling for Mac AudioUnit, I have a compiler error in AUCarbonViewBase.cpp. What can i do?", "faq.html#faqMiscellaneous9", null ],
        [ "Q: How can i develop a SurroundPanner plug-in which is integrated in Nuendo as Panner?", "faq.html#faqMiscellaneous10", null ],
        [ "Q: How can i validate my plug-in?", "faq.html#faqMiscellaneous11", null ],
        [ "Q: How can i allow to create Symbolic Link on Windows?", "faq.html#faqMiscellaneous12", null ]
      ] ],
      [ "License", "faq.html#faqLicense", null ]
    ] ],
    [ "VST 3 Licensing Issues", "vst3License.html", [
      [ "Steinberg VST usage guidelines", "vst3License.html#guidelines", null ],
      [ "What are the licensing options for VST 3?", "vst3License.html#lic1", [
        [ "\"Proprietary Steinberg VST 3\" license", "vst3License.html#lic2", null ],
        [ "\"Open-source GPLv3\" license", "vst3License.html#lic3", null ]
      ] ],
      [ "Which files of the VST 3 SDK are under which license?", "vst3License.html#lic4", null ],
      [ "Whats about VST 2?", "vst3License.html#licvst2", null ],
      [ "Developer use cases", "vst3License.html#lic5", [
        [ "I would like to share the source code of my VST 3 plug-in/host on GitHub or other such platform.", "vst3License.html#usecase1", null ],
        [ "I would like to distribute my VST 3 plug-in/host as freeware/shareware in binary form only.", "vst3License.html#usecase2", null ],
        [ "I would like to sell my VST 3 plug-in/host in binary form only.", "vst3License.html#usecase3", null ],
        [ "I would like to adapt the VST 3 SDK's sources to my VST 3 plug-in/host's needs.", "vst3License.html#usecase4", null ],
        [ "I would like to reuse a distributed modified version of the VST 3 SDK for my own VST 3 plug-ins/host.", "vst3License.html#usecase5", null ],
        [ "I would like to distribute my VST 3 plug-in/host in binary form based on a modified version of VST 3 SDK which is under GPLv3.", "vst3License.html#usecase6", null ],
        [ "I would like to sell my VST 3 plug-in/host in binary form which is based on a 3rd party SDK like JUCE.", "vst3License.html#usecase7", null ],
        [ "I would like to distribute my VST 3 plug-in/host in binary form which is based on a 3rd party SDK like JUCE and used its GPLv3 license.", "vst3License.html#usecase8", null ],
        [ "I would like to share the source code of my VST 2 plug-in/host on GitHub or other web-based exchange platform.", "vst3License.html#usecase9", null ],
        [ "Do I have to sign and send to Steinberg the \"Proprietary Steinberg VST 3\" license agreement for each new version of the VST 3 SDK?", "vst3License.html#usecase10", null ]
      ] ]
    ] ],
    [ "Other Copyrights/Trademarks", "otherCopyright.html", null ],
    [ "Test Applications", "applications.html", [
      [ "Validator command line", "applications.html#validator", null ],
      [ "AudioHost - Cross-platform Standalone", "applications.html#audiohost", null ],
      [ "EditorHost - Cross-platform Standalone", "applications.html#editorhost", null ],
      [ "VST 3 Plug-in Test Host", "applications.html#vstTestHost", [
        [ "How to use it?", "applications.html#howtouse", null ],
        [ "VST Player Window", "applications.html#vstTestHostPlayer", [
          [ "Audio Input", "applications.html#audio", null ],
          [ "Event Input", "applications.html#input", null ],
          [ "VST Rack", "applications.html#rack", null ],
          [ "Info Window", "applications.html#info", null ],
          [ "Transport", "applications.html#transport", null ]
        ] ],
        [ "VST 3 Plug-ins Tests Window", "applications.html#vstTestHostTests", null ],
        [ "Preset Editor", "applications.html#vstTestHostPresets", null ]
      ] ]
    ] ],
    [ "VST3 Project Generator", "vst3projectgenerator.html", null ],
    [ "VST 3 Change History", "vst3History.html", [
      [ "Version 3.7.0 (2020/07/29)", "vst3History.html#rev3700", null ],
      [ "Version 3.6.14 (2020/11/29)", "vst3History.html#rev3614", null ],
      [ "Version 3.6.13 (2020/04/08)", "vst3History.html#rev3613", null ],
      [ "Version 3.6.12 (2018/12/03)", "vst3History.html#rev3612", null ],
      [ "Version 3.6.11 (2018/10/22)", "vst3History.html#rev3611", null ],
      [ "Version 3.6.10 (2018/06/11)", "vst3History.html#rev3610", null ],
      [ "Version 3.6.9 (2018/03/01)", "vst3History.html#rev369", null ],
      [ "Version 3.6.8 (2017/11/08)", "vst3History.html#rev368", null ],
      [ "Version 3.6.7 (2017/03/03)", "vst3History.html#rev367", null ],
      [ "Version 3.6.6 (2016/06/17)", "vst3History.html#rev366", null ],
      [ "Version 3.6.5 (2015/08/28)", "vst3History.html#rev365", null ],
      [ "Version 3.6.0 (2013/11/22)", "vst3History.html#rev360", null ],
      [ "Version 3.5.2 (2012/09/25)", "vst3History.html#rev352", null ],
      [ "Version 3.5.1 (2011/11/11)", "vst3History.html#rev351", null ],
      [ "Version 3.5.0 (2011/02/04)", "vst3History.html#rev350", null ],
      [ "Version 3.1.0 (2010/06/25)", "vst3History.html#rev310", null ],
      [ "Version 3.0.2 (2009/01/15)", "vst3History.html#rev302", null ],
      [ "Version 3.0.1 (2008/03/19)", "vst3History.html#rev301", null ],
      [ "Version 3.0.0 (2008/01/17)", "vst3History.html#rev300", null ]
    ] ],
    [ "VST 3 - AAX Wrapper", "AAXWrapper.html", [
      [ "Introduction", "AAXWrapper.html#AAXIntroduction", null ],
      [ "How does it work?", "AAXWrapper.html#howtoAAX", null ]
    ] ],
    [ "VST 3 - Audio Unit v3 Wrapper", "AUv3Wrapper.html", [
      [ "Introduction", "AUv3Wrapper.html#AUv3Introduction", null ],
      [ "How does it work?", "AUv3Wrapper.html#howtoAUv3", null ]
    ] ],
    [ "VST 3 - Audio Unit Wrapper", "AUWrapper.html", [
      [ "Introduction", "AUWrapper.html#AUIntroduction", null ],
      [ "How does it work?", "AUWrapper.html#AUhowdoesitwork", null ]
    ] ],
    [ "[3.6.0] iOS Inter-App Audio support", "interappaudio.html", [
      [ "Introduction", "interappaudio.html#iaa_introduction", null ],
      [ "How does it work?", "interappaudio.html#iaa_howto", [
        [ "Create and Setup the Xcode Project", "interappaudio.html#iaa_howto1", null ],
        [ "Add your Audio Component description to the Info.plist", "interappaudio.html#iaa_howto2", null ],
        [ "Add files to the project", "interappaudio.html#iaa_howto3", null ],
        [ "If using vstgui", "interappaudio.html#iaa_howto4", null ]
      ] ],
      [ "Code changes", "interappaudio.html#iaa_codechanges", null ],
      [ "UI Handling", "interappaudio.html#iaa_ui", [
        [ "Creating a different UI when running on iOS", "interappaudio.html#iaa_editor", null ],
        [ "Using VSTGUI", "interappaudio.html#iaa_ui_vstgui", null ],
        [ "Using a native UIView", "interappaudio.html#iaa_ui_native", null ],
        [ "Host UI Integration", "interappaudio.html#iaa_host_ui", null ]
      ] ]
    ] ],
    [ "VST 3 - VST 2.x Wrapper", "vst2xwrapper.html", [
      [ "Introduction", "vst2xwrapper.html#VST2Introduction", null ],
      [ "How does it work?", "vst2xwrapper.html#VST2howdoesitwork", null ]
    ] ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Properties", "functions_prop.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"AAXWrapper.html",
"classSteinberg_1_1Vst_1_1EditController.html#a30a5f278c9ad42c540a11823241e59e3",
"classSteinberg_1_1Vst_1_1ParameterChanges.html#aecf67b64e5c0c9880530199fa9d7cc9a",
"classSteinberg_1_1Vst_1_1StringListParameter.html#aa4056bdab127f0ae3fd36fef00fe86c1",
"functions_func_n.html",
"structVST3_1_1UID.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';