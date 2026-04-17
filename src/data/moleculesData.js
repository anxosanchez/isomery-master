export const ATOM_STYLES = {
  C: { color: '#444444', radius: 0.4 },
  H: { color: '#ffffff', radius: 0.25 },
  O: { color: '#ff3333', radius: 0.35 },
  N: { color: '#3333ff', radius: 0.35 },
  Cl: { color: '#33ff33', radius: 0.45 },
};

export const isomerGroups = [
  {
    id: 'estructural-cadea',
    title: { gl: 'Isomería de Cadea', en: 'Chain Isomerism' },
    description: { 
      gl: 'Moléculas coa mesma fórmula molecular pero distinta disposición da cadea carbonada.',
      en: 'Molecules with the same molecular formula but different arrangement of the carbon chain.'
    },
    isomers: [
      {
        id: 'n-butano', carbons: 4,
        name: { gl: 'Butano', en: 'Butane' },
        iupac: 'Butane', formula: 'C₄H₁₀', smiles: 'CCCC', cas: '106-97-8', pubchemCid: 7843,
        atoms: [
          { element: 'C', pos: [-1.5, 0, 0] }, { element: 'C', pos: [-0.5, 0.5, 0] }, { element: 'C', pos: [0.5, -0.5, 0] }, { element: 'C', pos: [1.5, 0, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }]
      },
      {
        id: 'isobutano', carbons: 4,
        name: { gl: 'Isobutano', en: 'Isobutane' },
        iupac: '2-metilpropano', formula: 'C₄H₁₀', smiles: 'CC(C)C', cas: '75-28-5', pubchemCid: 6360,
        atoms: [
          { element: 'C', pos: [0, 0, 0] }, { element: 'C', pos: [1, 1, 0] }, { element: 'C', pos: [-1, 1, 0] }, { element: 'C', pos: [0, -1.3, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 0, end: 3 }]
      },
      {
        id: 'n-pentane', carbons: 5,
        name: { gl: 'n-Pentano', en: 'n-Pentane' },
        iupac: 'Pentane', formula: 'C₅H₁₂', smiles: 'CCCCC', cas: '109-66-0', pubchemCid: 8003,
        atoms: [
          { element: 'C', pos: [-2, 0, 0] }, { element: 'C', pos: [-1, 0.5, 0] }, { element: 'C', pos: [0, -0.5, 0] }, { element: 'C', pos: [1, 0.5, 0] }, { element: 'C', pos: [2, 0, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }]
      },
      {
        id: 'isopentane', carbons: 5,
        name: { gl: 'Isopentano', en: 'Isopentane' },
        iupac: '2-metilbutano', formula: 'C₅H₁₂', smiles: 'CCC(C)C', cas: '78-78-4', pubchemCid: 6556,
        atoms: [
          { element: 'C', pos: [-1, 0, 0] }, { element: 'C', pos: [0, 0.5, 0] }, { element: 'C', pos: [1, -0.5, 0] }, { element: 'C', pos: [2, 0, 0] }, { element: 'C', pos: [0, 1.5, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 1, end: 4 }]
      },
      {
        id: 'n-hexane', carbons: 6,
        name: { gl: 'n-Hexano', en: 'n-Hexane' },
        iupac: 'Hexane', formula: 'C₆H₁₄', smiles: 'CCCCCC', cas: '110-54-3', pubchemCid: 8058,
        atoms: [
          { element: 'C', pos: [-2.5, 0.5, 0] }, { element: 'C', pos: [-1.5, -0.5, 0] }, { element: 'C', pos: [-0.5, 0.5, 0] }, { element: 'C', pos: [0.5, -0.5, 0] }, { element: 'C', pos: [1.5, 0.5, 0] }, { element: 'C', pos: [2.5, -0.5, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 4, end: 5 }]
      }
    ]
  },
  {
    id: 'estructural-posicion',
    title: { gl: 'Isomería de Posición', en: 'Position Isomerism' },
    description: {
      gl: 'Moléculas coa mesma cadea e grupo funcional, pero este último está en distinta posición.',
      en: 'Molecules with the same chain and functional group, but the latter is in a different position.'
    },
    isomers: [
      {
        id: '1-propanol', carbons: 3,
        name: { gl: '1-Propanol', en: '1-Propanol' },
        iupac: 'Propan-1-ol', formula: 'C₃H₈O', smiles: 'CCCO', cas: '71-23-8', pubchemCid: 1031,
        atoms: [
          { element: 'C', pos: [-1, 0, 0] }, { element: 'C', pos: [0, 0.5, 0] }, { element: 'C', pos: [1, -0.2, 0] }, { element: 'O', pos: [2, 0.5, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }]
      },
      {
        id: '2-propanol', carbons: 3,
        name: { gl: '2-Propanol', en: '2-Propanol' },
        iupac: 'Propan-2-ol', formula: 'C₃H₈O', smiles: 'CC(C)O', cas: '67-63-0', pubchemCid: 3776,
        atoms: [
          { element: 'C', pos: [-1.2, -0.5, 0] }, { element: 'C', pos: [0, 0.3, 0] }, { element: 'C', pos: [1.2, -0.5, 0] }, { element: 'O', pos: [0, 1.5, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 1, end: 3 }]
      },
      {
        id: '1-butanol', carbons: 4,
        name: { gl: '1-Butanol', en: '1-Butanol' },
        iupac: 'Butan-1-ol', formula: 'C₄H₁₀O', smiles: 'CCCCO', cas: '71-36-3', pubchemCid: 263,
        atoms: [
          { element: 'C', pos: [-1.5, 0.5, 0] }, { element: 'C', pos: [-0.5, -0.5, 0] }, { element: 'C', pos: [0.5, 0.5, 0] }, { element: 'C', pos: [1.5, -0.5, 0] }, { element: 'O', pos: [2.5, 0, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }]
      },
      {
        id: '2-butanol', carbons: 4,
        name: { gl: '2-Butanol', en: '2-Butanol' },
        iupac: 'Butan-2-ol', formula: 'C₄H₁₀O', smiles: 'CCC(O)C', cas: '78-92-2', pubchemCid: 263,
        atoms: [
          { element: 'C', pos: [-1.5, 0, 0] }, { element: 'C', pos: [-0.5, 0.5, 0] }, { element: 'C', pos: [0.5, -0.5, 0] }, { element: 'C', pos: [1.5, 0, 0] }, { element: 'O', pos: [-0.5, 1.5, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 1, end: 4 }]
      }
    ]
  },
  {
    id: 'isomería-aromatica',
    title: { gl: 'Isomería Aromática', en: 'Aromatic Isomerism' },
    description: { 
      gl: 'Isomería de posición nun anel de benceno (orto, meta, para).',
      en: 'Position isomerism on a benzene ring (ortho, meta, para).'
    },
    isomers: [
      {
        id: 'o-xylene', carbons: 8,
        name: { gl: 'o-Xileno (1,2-dimetilbenceno)', en: 'o-Xylene (1,2-dimethylbenzene)' },
        iupac: '1,2-dimethylbenzene', formula: 'C₈H₁₀', smiles: 'CC1=CC=CC=C1C', cas: '95-47-6', pubchemCid: 7237,
        atoms: [
          { element: 'C', pos: [0.58, 0.69, 0] }, { element: 'C', pos: [0.58, -0.69, 0] }, { element: 'C', pos: [-0.62, 1.39, 0] }, { element: 'C', pos: [-0.62, -1.39, 0] },
          { element: 'C', pos: [1.86, 1.46, 0] }, { element: 'C', pos: [1.86, -1.46, 0] }, { element: 'C', pos: [-1.83, 0.69, 0] }, { element: 'C', pos: [-1.83, -0.69, 0] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 0, end: 2, type: 2 }, { start: 0, end: 4 },
          { start: 1, end: 3, type: 2 }, { start: 1, end: 5 }, { start: 2, end: 6 },
          { start: 3, end: 7 }, { start: 6, end: 7, type: 2 }
        ]
      },
      {
        id: 'm-xylene', carbons: 8,
        name: { gl: 'm-Xileno (1,3-dimetilbenceno)', en: 'm-Xylene (1,3-dimethylbenzene)' },
        iupac: '1,3-dimethylbenzene', formula: 'C₈H₁₀', smiles: 'CC1=CC(C)=CC=C1', cas: '108-38-3', pubchemCid: 7929,
        atoms: [
          { element: 'C', pos: [-0.00, 0.23, 0] }, { element: 'C', pos: [1.20, -0.46, 0] }, { element: 'C', pos: [-1.20, -0.46, 0] },
          { element: 'C', pos: [1.20, -1.85, 0] }, { element: 'C', pos: [-1.20, -1.85, 0] }, { element: 'C', pos: [-0.00, -2.55, 0] },
          { element: 'C', pos: [-0.00, 1.74, 0] }, { element: 'C', pos: [2.50, 0.28, 0] },
        ],
        bonds: [
          { start: 0, end: 1, type: 2 }, { start: 0, end: 2 }, { start: 0, end: 6 },
          { start: 1, end: 3 }, { start: 1, end: 7 }, { start: 2, end: 4, type: 2 },
          { start: 3, end: 5, type: 2 }, { start: 4, end: 5 }
        ]
      },
      {
        id: 'p-xylene', carbons: 8,
        name: { gl: 'p-Xileno (1,4-dimetilbenceno)', en: 'p-Xylene (1,4-dimethylbenzene)' },
        iupac: '1,4-dimethylbenzene', formula: 'C₈H₁₀', smiles: 'CC1=CC=C(C)C=C1', cas: '106-42-3', pubchemCid: 7809,
        atoms: [
          { element: 'C', pos: [0, 0.69, 0] }, { element: 'C', pos: [0, -0.69, 0] }, { element: 'C', pos: [1.20, 1.39, 0] }, 
          { element: 'C', pos: [-1.20, -1.39, 0] }, { element: 'C', pos: [1.20, 2.78, 0] }, { element: 'C', pos: [-1.20, -2.78, 0] },
          { element: 'C', pos: [2.41, 0.69, 0] }, { element: 'C', pos: [-2.41, -0.69, 0] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 0, end: 2, type: 2 }, { start: 1, end: 3, type: 2 },
          { start: 2, end: 4 }, { start: 2, end: 6 }, { start: 3, end: 5 },
          { start: 3, end: 7 }, { start: 6, end: 7, type: 2 }
        ]
      }
    ]
  },
  {
    id: 'isomería-ciclica',
    title: { gl: 'Isomería en Ciclos', en: 'Cyclic Isomerism' },
    description: { 
      gl: 'Isomería xeométrica (cis/trans) e de posición en aneis saturados.',
      en: 'Geometric (cis/trans) and position isomerism in saturated rings.'
    },
    isomers: [
      {
        id: 'cis-1-2-dichlorocyclohexane', carbons: 6,
        name: { gl: 'cis-1,2-diclorociclohexano', en: 'cis-1,2-dichlorocyclohexane' },
        iupac: 'cis-1,2-dichlorocyclohexane', formula: 'C₆H₁₀Cl₂', smiles: 'Cl[C@H]1CCCC[C@H]1Cl', cas: '610-57-1', pubchemCid: 66334,
        atoms: [
          { element: 'Cl', pos: [2.59, -0.63, 0.15] }, { element: 'Cl', pos: [0.71, 1.80, -1.02] },
          { element: 'C', pos: [0.84, -0.51, 0.48] }, { element: 'C', pos: [0.35, 0.94, 0.50] },
          { element: 'C', pos: [0.05, -1.38, -0.49] }, { element: 'C', pos: [-1.15, 0.99, 0.77] },
          { element: 'C', pos: [-1.44, -1.31, -0.21] }, { element: 'C', pos: [-1.96, 0.11, -0.18] },
        ],
        bonds: [
          { start: 0, end: 2 }, { start: 1, end: 3 }, { start: 2, end: 3 },
          { start: 2, end: 4 }, { start: 3, end: 5 }, { start: 4, end: 6 },
          { start: 5, end: 7 }, { start: 6, end: 7 }
        ]
      },
      {
        id: 'trans-1-2-dichlorocyclohexane', carbons: 6,
        name: { gl: 'trans-1,2-diclorociclohexano', en: 'trans-1,2-dichlorocyclohexane' },
        iupac: 'trans-1,2-dichlorocyclohexane', formula: 'C₆H₁₀Cl₂', smiles: 'Cl[C@@H]1CCCC[C@H]1Cl', cas: '822-86-6', pubchemCid: 2723623,
        atoms: [
          { element: 'Cl', pos: [2.03, 1.13, -0.75] }, { element: 'Cl', pos: [-2.03, 1.13, 0.75] },
          { element: 'C', pos: [0.66, 0.90, 0.38] }, { element: 'C', pos: [-0.66, 0.90, -0.38] },
          { element: 'C', pos: [0.87, -0.38, 1.19] }, { element: 'C', pos: [-0.87, -0.38, -1.19] },
          { element: 'C', pos: [0.67, -1.65, 0.35] }, { element: 'C', pos: [-0.67, -1.65, -0.35] },
        ],
        bonds: [
          { start: 0, end: 2 }, { start: 1, end: 3 }, { start: 2, end: 3 },
          { start: 2, end: 4 }, { start: 3, end: 5 }, { start: 4, end: 6 },
          { start: 5, end: 7 }, { start: 6, end: 7 }
        ]
      }
    ]
  },
  {
    id: 'estereoisomeria-geometrica',
    title: { gl: 'Isomería Xeométrica', en: 'Geometric Isomerism' },
    description: {
      gl: 'Diferente disposición espacial ao redor dun dobre enlace (ixidez).',
      en: 'Different spatial arrangement around a double bond (rigidity).'
    },
    isomers: [
      {
        id: 'cis-2-buteno', carbons: 4,
        name: { gl: 'cis-2-Buteno', en: 'cis-2-Butene' },
        iupac: '(Z)-but-2-eno', formula: 'C₄H₈', smiles: 'C/C=C\\C', cas: '590-18-1', pubchemCid: 5287573,
        atoms: [
          { element: 'C', pos: [-0.67, 0, 0] }, { element: 'C', pos: [0.67, 0, 0] }, { element: 'C', pos: [-1.5, 1.2, 0] }, { element: 'C', pos: [1.5, 1.2, 0] },
        ],
        bonds: [{ start: 0, end: 1, type: 2 }, { start: 0, end: 2 }, { start: 1, end: 3 }]
      },
      {
        id: 'trans-2-buteno', carbons: 4,
        name: { gl: 'trans-2-Buteno', en: 'trans-2-Butene' },
        iupac: '(E)-but-2-eno', formula: 'C₄H₈', smiles: 'C/C=C/C', cas: '624-64-6', pubchemCid: 62695,
        atoms: [
          { element: 'C', pos: [-0.67, 0, 0] }, { element: 'C', pos: [0.67, 0, 0] }, { element: 'C', pos: [-1.5, 1.2, 0] }, { element: 'C', pos: [1.5, -1.2, 0] },
        ],
        bonds: [{ start: 0, end: 1, type: 2 }, { start: 0, end: 2 }, { start: 1, end: 3 }]
      }
    ]
  },
  {
    id: 'estereoisomeria-optica',
    title: { gl: 'Isomería Óptica', en: 'Optical Isomerism' },
    isomers: [
      {
        id: 'r-lactic-acid', carbons: 3,
        name: { gl: 'Ácido (R)-láctico', en: '(R)-Lactic acid' },
        iupac: 'Ácido (2R)-2-hidroxipropanoico', formula: 'C₃H₆O₃', smiles: 'C[C@H](O)C(=O)O', cas: '10326-41-7', pubchemCid: 61503,
        atoms: [
          { element: 'C', pos: [0, 0, 0] }, { element: 'C', pos: [0, 1.5, 0] }, { element: 'C', pos: [1.3, -0.6, 0.5] }, { element: 'O', pos: [-1.3, -0.6, 0.5] },
          { element: 'H', pos: [0, -0.5, -1] }, { element: 'O', pos: [-0.8, 2.3, 0.4] }, { element: 'O', pos: [0.8, 2.0, -0.8] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 0, end: 3 }, { start: 0, end: 4 }, { start: 1, end: 5, type: 2 }, { start: 1, end: 6 }]
      },
      {
        id: 's-lactic-acid', carbons: 3,
        name: { gl: 'Ácido (S)-láctico', en: '(S)-Lactic acid' },
        iupac: 'Ácido (2S)-2-hidroxipropanoico', formula: 'C₃H₆O₃', smiles: 'C[C@@H](O)C(=O)O', cas: '79-33-4', pubchemCid: 107689,
        atoms: [
          { element: 'C', pos: [0, 0, 0] }, { element: 'C', pos: [0, 1.5, 0] }, { element: 'C', pos: [-1.3, -0.6, 0.5] }, { element: 'O', pos: [1.3, -0.6, 0.5] },
          { element: 'H', pos: [0, -0.5, -1] }, { element: 'O', pos: [0.8, 2.3, 0.4] }, { element: 'O', pos: [-0.8, 2.0, -0.8] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 0, end: 3 }, { start: 0, end: 4 }, { start: 1, end: 5, type: 2 }, { start: 1, end: 6 }]
      }
    ]
  },
  {
    id: 'isomería-conformacional',
    title: { gl: 'Isomería Conformacional', en: 'Conformational Isomerism' },
    isomers: [
      {
        id: 'ciclohexano-cadeira', carbons: 6,
        name: { gl: 'Cliclohexano (Cadeira)', en: 'Cyclohexane (Chair)' },
        iupac: 'Ciclohexano', formula: 'C₆H₁₂', smiles: 'C1CCCCC1', cas: '110-82-7', pubchemCid: 8078,
        atoms: [
          { element: 'C', pos: [1.0, 0, 0.3] }, { element: 'C', pos: [0.5, 0.86, -0.3] }, { element: 'C', pos: [-0.5, 0.86, 0.3] }, { element: 'C', pos: [-1.0, 0, -0.3] }, { element: 'C', pos: [-0.5, -0.86, 0.3] }, { element: 'C', pos: [0.5, -0.86, -0.3] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 4, end: 5 }, { start: 5, end: 0 }]
      },
      {
        id: 'ciclohexano-bote', carbons: 6,
        name: { gl: 'Ciclohexano (Bote)', en: 'Cyclohexane (Boat)' },
        iupac: 'Ciclohexano', formula: 'C₆H₁₂', smiles: 'C1CCCCC1', cas: '110-82-7', pubchemCid: 8078,
        atoms: [
          { element: 'C', pos: [1.0, 0, 0.5] }, { element: 'C', pos: [0.5, 0.86, 0] }, { element: 'C', pos: [-0.5, 0.86, 0] }, { element: 'C', pos: [-1.0, 0, 0.5] }, { element: 'C', pos: [-0.5, -0.86, 0] }, { element: 'C', pos: [0.5, -0.86, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 4, end: 5 }, { start: 5, end: 0 }]
      }
    ]
  }
];
