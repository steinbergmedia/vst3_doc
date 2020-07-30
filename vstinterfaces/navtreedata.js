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
  [ "VST 3 Interfaces", "index.html", [
    [ "VST 3 API Documentation", "index.html", [
      [ "Contents", "index.html#vst3Contents", null ],
      [ "Change History", "index.html#newinvst3x", null ],
      [ "Basic Conception", "index.html#vst3Structure", [
        [ "Initialize", "index.html#Initialize", null ],
        [ "Creation and Initialize from host point of view", "index.html#creation", null ],
        [ "Extensions", "index.html#Extensions", null ],
        [ "Persistence", "index.html#Persistence", null ]
      ] ],
      [ "The Processing Part", "index.html#vst3Processing", [
        [ "IComponent", "index.html#icomponent", null ],
        [ "IAudioProcessor", "index.html#iaudioprocessor", null ]
      ] ],
      [ "The Editing Part", "index.html#vst3Editing", null ],
      [ "Communication between the components", "index.html#vst3Communication", [
        [ "Standard Communication", "index.html#standard", null ],
        [ "Private Communication", "index.html#private", null ],
        [ "Initialization of communication from host point of view", "index.html#initialization", null ]
      ] ]
    ] ],
    [ "Parameters and Automation", "vst3Automation.html", [
      [ "Parameters", "vst3Automation.html#vst3ParameterIntro", [
        [ "Representation of parameter values", "vst3Automation.html#Representationofparametervalues", [
          [ "Parameter styles / 'Step Count'", "vst3Automation.html#parameterstyle", null ]
        ] ],
        [ "Conversion of normalized values", "vst3Automation.html#Conversionofnormalizedvalues", null ]
      ] ],
      [ "Automation", "vst3Automation.html#vst3AutomationIntro", [
        [ "Problems", "vst3Automation.html#problems", null ],
        [ "Automation Recording", "vst3Automation.html#vst3automationRecording", [
          [ "Sliders & Knobs", "vst3Automation.html#sliderknobs", null ],
          [ "Buttons / Radio Groups / Pop-up Menus", "vst3Automation.html#buttonradiopopup", null ],
          [ "Text Input", "vst3Automation.html#textinput", null ]
        ] ],
        [ "Automation Playback", "vst3Automation.html#vst3automationPlayback", null ]
      ] ]
    ] ],
    [ "VST 3 Units", "vst3Units.html", [
      [ "Unit details", "vst3Units.html#unitdetails", null ],
      [ "Examples", "vst3Units.html#unitexamples", null ]
    ] ],
    [ "[3.0.0] Interfaces supported by the plug-in", "interfaceplug30.html", [
      [ "IComponent", "interfaceplug30.html#IComponent", null ],
      [ "IAudioProcessor", "interfaceplug30.html#IAudioProcessor", null ],
      [ "IEditController", "interfaceplug30.html#IEditController", null ],
      [ "IConnectionPoint", "interfaceplug30.html#IConnectionPoint", null ],
      [ "IUnitInfo", "interfaceplug30.html#IUnitInfo", null ],
      [ "IProgramListData", "interfaceplug30.html#IProgramListData", null ],
      [ "IUnitData", "interfaceplug30.html#IUnitData", null ],
      [ "IPlugView", "interfaceplug30.html#IPlugView", null ]
    ] ],
    [ "[3.0.0] Interfaces supported by the host", "interfacehost30.html", [
      [ "IAttributeList", "interfacehost30.html#IAttributeList", null ],
      [ "IComponentHandler", "interfacehost30.html#IComponentHandler", null ],
      [ "IEventList", "interfacehost30.html#IEventList", null ],
      [ "IUnitHandler", "interfacehost30.html#IUnitHandler", null ],
      [ "IHostApplication", "interfacehost30.html#IHostApplication", null ],
      [ "IMessage", "interfacehost30.html#IMessage", null ],
      [ "IParamValueQueue", "interfacehost30.html#IParamValueQueue", null ],
      [ "IParameterChanges", "interfacehost30.html#IParameterChanges", null ],
      [ "IPlugFrame", "interfacehost30.html#IPlugFrame", null ]
    ] ],
    [ "[3.0.1] Parameter MIDI Mapping Support", "imidimappingsupport.html", null ],
    [ "[3.0.2] Parameter Finder Support", "iparameterfindersupport.html", null ],
    [ "[3.1.0] KnobMode / openHelp / openAboutBox Support", "ieditcontroller2.html", null ],
    [ "[3.1.0] UI Group Editing, Dirty State and Open Editor Request Support", "icomponenthandler2.html", null ],
    [ "[3.1.0] Audio Presentation Latency Support", "iaudiopresentationlatency.html", null ],
    [ "[3.5.0] Context Menu Support", "contextmenu.html", null ],
    [ "[3.5.0] Better Support of Linked Parameters", "ieditcontrollerhostediting.html", null ],
    [ "[3.5.0] Note Expression Support", "noteExpression.html", [
      [ "Introduction", "noteExpression.html#neintro", null ],
      [ "How does it work?", "noteExpression.html#nehowitwork", null ]
    ] ],
    [ "[3.5.0] Key Switch Support", "keyswitch.html", [
      [ "Introduction", "keyswitch.html#ksintro", null ],
      [ "How does it work?", "keyswitch.html#kshowitwork", null ]
    ] ],
    [ "[3.5.0] Remote Representation of Parameters Support", "representation.html", [
      [ "Introduction", "representation.html#reintro", null ],
      [ "Graphical overview", "representation.html#review", null ],
      [ "Example of implementation using helper class", "representation.html#reexample", null ],
      [ "Location table for VST XMLs representation", "representation.html#retable", [
        [ "For Mac platform", "representation.html#macxml", null ],
        [ "For Windows Vista/7/8/10 platform", "representation.html#win7xml", null ],
        [ "For Windows XP/2000 platform", "representation.html#win2000xml", null ]
      ] ]
    ] ],
    [ "[3.6.0] iOS Inter-App Audio support", "interappaudio2.html", null ],
    [ "[3.6.0] Preset Meta-Information Support", "streamAttributes.html", null ],
    [ "[3.6.5] Channel Context Info Support", "channelContextInfo.html", null ],
    [ "[3.6.5] Prefetchable Support", "prefetchableSupport.html", null ],
    [ "[3.6.5] Unit-Bus Assignment Change Support", "iunithandler2.html", null ],
    [ "[3.6.5] Automation State Support", "iautomationstate.html", null ],
    [ "[3.6.6] PlugView Content Scale Support", "iplugviewcontentscalesupport.html", null ],
    [ "[3.6.8] Request Bus Activation", "requestbusactivation.html", null ],
    [ "[3.6.10] Snapshots inside the VST3 Bundle Support", "snapshotsSupport.html", null ],
    [ "[3.6.11] NoteExpression Physical UI Mapping Support", "noteExpressionPhysicalUIMapping.html", null ],
    [ "[3.6.12] Legacy MIDI CC Out Event", "legacyMIDICCOutEvent.html", null ],
    [ "[3.6.12] MIDI Learn Support", "imidilearn.html", null ],
    [ "[3.6.12] PlugInterface Support from host", "ipluginterfacesupport.html", null ],
    [ "[3.6.12] MPE support in Wrappers", "mpewrappersupport.html", null ],
    [ "[3.7.0] Process Context Requirements", "processcontextrequirements.html", null ],
    [ "[3.7.0] IProgress Support", "progress.html", null ],
    [ "[3.7.0] Parameter Function Name", "parameterfunctionname.html", null ],
    [ "Presets & Program Lists", "vst3Presets.html", [
      [ "Simple plug-ins", "vst3Presets.html#vst3PrestsSimple", null ],
      [ "Program Lists", "vst3Presets.html#vst3ProgramLists", [
        [ "Structure of Program Lists", "vst3Presets.html#vst3ProgramListStructure", null ],
        [ "Pitch Names", "vst3Presets.html#vst3ProgramPitchNames", null ]
      ] ]
    ] ],
    [ "Complex plug-in Structures / Multi-timbral Instruments", "vst3Multitimbral.html", [
      [ "The Problem", "vst3Multitimbral.html#vst3MultitimbralIntro", null ],
      [ "The Simple Mode", "vst3Multitimbral.html#vst3IoMode", null ],
      [ "Multi-timbral Program Lists", "vst3Multitimbral.html#vst3MultitimbralPrograms", null ],
      [ "Units and Tracks", "vst3Multitimbral.html#vst3UnitsTracks", null ],
      [ "Routing", "vst3Multitimbral.html#vst3Routing", null ]
    ] ],
    [ "VST 3 Workflow Diagrams", "workflow.html", [
      [ "Audio Processor Call Sequence", "workflow.html#processorcallsequence", null ],
      [ "Edit Controller Call Sequence", "workflow.html#controllercallsequence", null ],
      [ "Get Latency Call Sequences", "workflow.html#GetLatencyCallSequence", null ],
      [ "Resize View Call Sequences", "workflow.html#ResizeCallSequence", null ]
    ] ],
    [ "VST 3 Locations / Format", "vst3loc.html", [
      [ "Plug-in Format", "vst3loc.html#plugFormat", [
        [ "For the macOS platform", "vst3loc.html#macformat", null ],
        [ "For the Windows platform", "vst3loc.html#winformat", null ],
        [ "For the Linux platform", "vst3loc.html#linuxformat", null ],
        [ "Snapshots", "vst3loc.html#snapshots", null ],
        [ "Merged Bundle", "vst3loc.html#mergedbundles", null ]
      ] ],
      [ "Plug-in Locations", "vst3loc.html#pluginloc", [
        [ "For the macOS platform", "vst3loc.html#maclocation", null ],
        [ "For the Windows platform", "vst3loc.html#winlocation", null ],
        [ "For Linux platform", "vst3loc.html#linuxlocation", null ]
      ] ],
      [ "Preset Format", "vst3loc.html#presetformat", null ],
      [ "Preset Locations", "vst3loc.html#presetloc", [
        [ "For Mac platform", "vst3loc.html#macpreset", null ],
        [ "For Windows XP/2000 platform", "vst3loc.html#win2000preset", null ],
        [ "For Windows Vista/7/8/10 platform", "vst3loc.html#win7preset", null ],
        [ "For Linux platform", "vst3loc.html#linuxpreset", null ]
      ] ],
      [ "Remote Representation Locations", "vst3loc.html#representationloc", null ]
    ] ],
    [ "About MIDI in VST 3", "MidiVst3About.html", [
      [ "Related Concepts in MIDI and VST 3", "MidiVst3About.html#MidiVst3Relations", null ],
      [ "MIDI 2.0 Per-Note Controllers", "MidiVst3About.html#Midi2PerNote", null ],
      [ "MIDI 2.0 Increased Resolution, compared to MIDI 1.0", "MidiVst3About.html#Midi2IncreasedResolution", null ]
    ] ],
    [ "How to use cmake for Building VST 3 plug-ins", "cmakeUse.html", null ],
    [ "How to add/create your own VST 3 plug-ins", "addownplugs.html", null ],
    [ "Setup Linux for building VST 3 plug-ins", "linuxSetup.html", [
      [ "Package Requirements", "linuxSetup.html#toolchainInstallation", null ]
    ] ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", "namespacemembers_vars" ],
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
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"MidiVst3About.html",
"classSteinberg_1_1Vst_1_1IComponentHandler3.html",
"classSteinberg_1_1Vst_1_1IStreamAttributes.html#ad8d90e182b51e387734f307c2c12a2f4",
"group__musicalInstrument.html#gab2577b8dac71b9e6d679cd5fd337fc70",
"group__speakerArrangements.html#ga319dbf573206d0bb1a8b77e7f476548d",
"group__vst3612.html",
"ivstmidicontrollers_8h.html#a70ee68a13248febed5047cfa0fddf4e6a8054b74403fa8ea7932e2a28aa4ef570",
"representation.html#win7xml",
"structSteinberg_1_1Vst_1_1UnitInfo.html",
"vstpresetkeys_8h.html#gaaa2fa8f51e39b78604c752001cbef8c6",
"vstspeaker_8h.html#ga88accb0a3074c3fb6eb3fdb490b21c62"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';