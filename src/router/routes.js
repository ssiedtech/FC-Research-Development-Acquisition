import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home.vue'

import TerminalLearningObjective from '../pages/rda/TerminalLearningObjective.vue';
import TheAcquisitionDilemma from '../pages/rda/TheAcquisitionDilemma.vue';
import RDALifecycleCosts from '../pages/rda/RDALifecycleCosts.vue';
import ArmyResearchandDevelopmentObjective from '../pages/rda/ArmyResearchandDevelopmentObjective.vue';
import ArmyEquipmentModernizationGuidance from '../pages/rda/ArmyEquipmentModernizationGuidance.vue';
import KeyArmyStakeholders from '../pages/rda/KeyArmyStakeholders.vue';
import DescribeTheProcessorIdentifyingArmyRDANeeds from '../pages/rda/DescribeTheProcessorIdentifyingArmyRDANeeds.vue';
import RequirementsGenerationProcess from '../pages/rda/RequirementsGenerationProcess.vue';
import RequirementsDetermination from '../pages/rda/RequirementsDetermination.vue';
import DefenseAcquisitionSystem from '../pages/rda/DefenseAcquisitionSystem.vue';
import DefenseAcquisitionBoardDAB from '../pages/rda/DefenseAcquisitionBoardDAB.vue';
import ArmyAcquisitionExecutiveAAE from '../pages/rda/ArmyAcquisitionExecutiveAAE.vue';
import MDASandACATS from '../pages/rda/MDASandACATS.vue';
import AcquisitionManagementStructure from '../pages/rda/AcquisitionManagementStructure.vue';
import ProgramExecutiveOfficerPEOStructure from '../pages/rda/ProgramExecutiveOfficerPEOStructure.vue';
import CapabilityMissionLattice30 from '../pages/rda/CapabilityMissionLattice30.vue';
import RDAAppropriations from '../pages/rda/RDAAppropriations.vue';
import RDAAppropriationsText from '../pages/rda/RDAAppropriationsText.vue';
import RDTEAppropriations from '../pages/rda/RDTEAppropriations.vue';
import TrackingRDTE from '../pages/rda/TrackingRDTE.vue';
import ProcurementAppropriations from '../pages/rda/ProcurementAppropriations.vue';
import TrackingProcurement from '../pages/rda/TrackingProcurement.vue';
import FlowofFunds from '../pages/rda/FlowofFunds.vue';
import ForeignMilitarySales1of4 from '../pages/rda/ForeignMilitarySales1of4.vue';
import ForeignMilitarySales2of4 from '../pages/rda/ForeignMilitarySales2of4.vue';
import ForeignMilitarySales3of4 from '../pages/rda/ForeignMilitarySales3of4.vue';
import ForeignMilitarySales4of4 from '../pages/rda/ForeignMilitarySales4of4.vue';
import ForeignMilitarySalesProcess from '../pages/rda/ForeignMilitarySalesProcess.vue';
import COL from '../pages/rda/COL.vue';
import COL2 from '../pages/rda/COL2.vue';
import COL3 from '../pages/rda/COL3.vue';
import COL4 from '../pages/rda/COL4.vue';
import COL5 from '../pages/rda/COL5.vue';
// import router2

import secondaryRouter from './secondaryRoute.js';
let routes = [
    {
        path: '',
        title: 'Home',
        icon: 'home',
        component: MainLayout,
        children: [
          { path: '/', name: 'home', title: 'Home', component: Home, props: true },
        ]
    },
    {
      path: '/rda',
      title: 'Research, Development, & Acquisition',
      icon: 'layers',
      redirect: '/rda/TerminalLearningObjective',
      component: MainLayout,
      children: [
        { 
          title: 'Terminal Learning Objective',
          path: '/rda/TerminalLearningObjective',
          name: 'TerminalLearningObjective',
          component: TerminalLearningObjective,
        },
        {
          title: 'The Acquisition Dilemma',
          path: '/rda/TheAcquisitionDilemma',
          name: 'TheAcquisitionDilemma',
          component: TheAcquisitionDilemma,
        },
        {
          title: 'RDA Lifecycle Costs',
          path: '/rda/RDALifecycleCosts',
          name: 'RDALifecycleCosts',
          component: RDALifecycleCosts,
        },
        {
          title: 'Army Research and Development Objective',
          path: '/rda/ArmyResearchandDevelopmentObjective',
          name: 'ArmyResearchandDevelopmentObjective',
          component: ArmyResearchandDevelopmentObjective,
        },
        {
          title: 'Army Equipment Modernization Guidance',
          path: '/rda/ArmyEquipmentModernizationGuidance',
          name: 'ArmyEquipmentModernizationGuidance',
          component: ArmyEquipmentModernizationGuidance,
        },
        {
          title: 'Key Army Stakeholders',
          path: '/rda/KeyArmyStakeholders',
          name: 'KeyArmyStakeholders',
          component: KeyArmyStakeholders,
        },
        {
          title: 'Check On Learning',
          path: '/rda/COL2',
          name: 'COL2.vue',
          component: COL2,
        },
        {
          title: 'Describe The Process or Identifying Army RDA Needs',
          path: '/rda/DescribeTheProcessorIdentifyingArmyRDANeeds',
          name: 'DescribeTheProcessorIdentifyingArmyRDANeeds',
          component: DescribeTheProcessorIdentifyingArmyRDANeeds,
        },
        {
          title: 'Requirements Generation Process',
          path: '/rda/RequirementsGenerationProcess',
          name: 'RequirementsGenerationProcess',
          component: RequirementsGenerationProcess,
        },
        {
          title: 'Requirements Determination',
          path: '/rda/RequirementsDetermination',
          name: 'RequirementsDetermination',
          component: RequirementsDetermination,
        },
        {
          title: 'Defense Acquisition System',
          path: '/rda/DefenseAcquisitionSystem',
          name: 'DefenseAcquisitionSystem',
          component: DefenseAcquisitionSystem,
        },
        {
          title: 'Defense Acquisition Board (DAB)',
          path: '/rda/DefenseAcquisitionBoardDAB',
          name: 'DefenseAcquisitionBoardDAB',
          component: DefenseAcquisitionBoardDAB,
        },
        {
          title: 'Army Acquisition Executive (AAE)',
          path: '/rda/ArmyAcquisitionExecutiveAAE',
          name: 'ArmyAcquisitionExecutiveAAE',
          component: ArmyAcquisitionExecutiveAAE,
        },
        {
          title: 'MDAS and ACATS',
          path: '/rda/MDASandACATS',
          name: 'MDASandACATS',
          component: MDASandACATS,
        },
        {
          title: 'Acquisition Management Structure',
          path: '/rda/AcquisitionManagementStructure',
          name: 'AcquisitionManagementStructure',
          component: AcquisitionManagementStructure,
        },
        {
          title: 'Program Executive Officer (PEO) Structure',
          path: '/rda/ProgramExecutiveOfficerPEOStructure',
          name: 'ProgramExecutiveOfficerPEOStructure',
          component: ProgramExecutiveOfficerPEOStructure,
        },
        {
          title: 'Capability Mission Lattice 3.0',
          path: '/rda/CapabilityMissionLattice30',
          name: 'CapabilityMissionLattice30',
          component: CapabilityMissionLattice30,
        },{
        title: 'Check On Learning',
        path: '/rda/COL3',
        name: 'CheckOnLearning3',
        component: COL3,
      },
        {
          title: 'RDA Appropriations',
          path: '/rda/RDAAppropriations',
          name: 'RDAAppropriations',
          component: RDAAppropriations,
        },
        {
          title: 'RDA Appropriations',
          path: '/rda/RDAAppropriationsText',
          name: 'RDAAppropriationsText',
          component: RDAAppropriationsText,
        },
        {
          title: 'RDT&E Appropriations',
          path: '/rda/RDTEAppropriations',
          name: 'RDTEAppropriations',
          component: RDTEAppropriations,
        },
        {
          title: 'Tracking RDTE',
          path: '/rda/TrackingRDTE',
          name: 'TrackingRDTE',
          component: TrackingRDTE,
        },
        {
          title: 'Procurement Appropriations',
          path: '/rda/ProcurementAppropriations',
          name: 'ProcurementAppropriations',
          component: ProcurementAppropriations,
        },
        {
          title: 'Tracking Procurement',
          path: '/rda/TrackingProcurement',
          name: 'TrackingProcurement',
          component: TrackingProcurement,
        },
        {
          title: 'Flow of Funds',
          path: '/rda/FlowofFunds',
          name: 'FlowofFunds',
          component: FlowofFunds,
        },
        {title: 'Check On Learning',
        path: '/rda/COL4',
        name: 'COL4.vue',
        component: COL4,
      },
        {
          title: 'Foreign Military Sales (1 of 4)',
          path: '/rda/ForeignMilitarySales1of4',
          name: 'ForeignMilitarySales1of4',
          component: ForeignMilitarySales1of4,
        },
        {
          title: 'Foreign Military Sales (2 of 4)',
          path: '/rda/ForeignMilitarySales2of4',
          name: 'ForeignMilitarySales2of4',
          component: ForeignMilitarySales2of4,
        },
        {
          title: 'Foreign Military Sales (3 of 4)',
          path: '/rda/ForeignMilitarySales3of4',
          name: 'ForeignMilitarySales3of4',
          component: ForeignMilitarySales3of4,
        },
        {
          title: 'Foreign Military Sales (4 of 4)',
          path: '/rda/ForeignMilitarySales4of4',
          name: 'ForeignMilitarySales4of4',
          component: ForeignMilitarySales4of4,
        },
        {
          title: 'Foreign Military Sales Process',
          path: '/rda/ForeignMilitarySalesProcess',
          name: 'ForeignMilitarySalesProcess',
          component: ForeignMilitarySalesProcess,
        },
        {title: 'Check On Learning',
        path: '/rda/COL5',
        name: 'COL5.vue',
        component: COL5,
      },
        { 
          title: 'Check on Learning',
          path: '/rda/COL',
          name: 'COL',
          component: COL,
        },
        { 
          title: 'Terminal Learning Objective',
          path: '/rda/TerminalLearningObjectiveEnd',
          name: 'TerminalLearningObjectiveEnd',
          component: TerminalLearningObjective,
        },
      ]
    }
];

secondaryRouter.map((route) => {
  routes[1].children.push(route);
});

export default routes;