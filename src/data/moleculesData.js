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
      // C4
      {
        id: 'n-butano', carbons: 4,
        name: { gl: 'Butano', en: 'Butane' },
        iupac: 'Butane', formula: 'C₄H₁₀', smiles: 'CCCC', cas: '106-97-8', pubchemCid: 7843,
        atoms: [
          { element: 'C', pos: [-1.5, 0, 0] }, { element: 'C', pos: [-0.5, 0.5, 0] }, { element: 'C', pos: [0.5, -0.5, 0] }, { element: 'C', pos: [1.5, 0, 0] },
          { element: 'H', pos: [-1.5, -1, 0] }, { element: 'H', pos: [-2, 0.5, 0.8] }, { element: 'H', pos: [-2, 0.5, -0.8] },
          { element: 'H', pos: [-0.5, 1.5, 0.5] }, { element: 'H', pos: [-0.3, 0.5, -1] },
          { element: 'H', pos: [0.3, -0.5, 1] }, { element: 'H', pos: [0.5, -1.5, -0.5] },
          { element: 'H', pos: [1.5, 1, 0] }, { element: 'H', pos: [2, -0.5, 0.8] }, { element: 'H', pos: [2, -0.5, -0.8] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }]
      },
      {
        id: 'isobutano', carbons: 4,
        name: { gl: 'Isobutano', en: 'Isobutane' },
        iupac: '2-metilpropano', formula: 'C₄H₁₀', smiles: 'CC(C)C', cas: '75-28-5', pubchemCid: 6360,
        atoms: [
          { element: 'C', pos: [0, 0, 0] }, { element: 'C', pos: [1, 1, 0] }, { element: 'C', pos: [-1, 1, 0] }, { element: 'C', pos: [0, -1.3, 0] },
          { element: 'H', pos: [0, 0, 1] }, { element: 'H', pos: [1.8, 1.2, 0.5] }, { element: 'H', pos: [1, 1.8, -0.5] }, { element: 'H', pos: [-1.8, 1.2, -0.5] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 0, end: 3 }]
      },
      // C5
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
        id: 'neopentane', carbons: 5,
        name: { gl: 'Neopentano', en: 'Neopentane' },
        iupac: '2,2-dimetilpropano', formula: 'C₅H₁₂', smiles: 'CC(C)(C)C', cas: '463-82-1', pubchemCid: 10041,
        atoms: [
          { element: 'C', pos: [0, 0, 0] }, { element: 'C', pos: [1, 0, 0] }, { element: 'C', pos: [-1, 0, 0] }, { element: 'C', pos: [0, 1, 0] }, { element: 'C', pos: [0, -1, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 0, end: 3 }, { start: 0, end: 4 }]
      },
      // C6
      {
        id: 'n-hexane', carbons: 6,
        name: { gl: 'n-Hexano', en: 'n-Hexane' },
        iupac: 'Hexane', formula: 'C₆H₁₄', smiles: 'CCCCCC', cas: '110-54-3', pubchemCid: 8058,
        atoms: [
          { element: 'C', pos: [-2.5, 0.5, 0] }, { element: 'C', pos: [-1.5, -0.5, 0] }, { element: 'C', pos: [-0.5, 0.5, 0] }, { element: 'C', pos: [0.5, -0.5, 0] }, { element: 'C', pos: [1.5, 0.5, 0] }, { element: 'C', pos: [2.5, -0.5, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 4, end: 5 }]
      },
      {
        id: '2-methylpentane', carbons: 6,
        name: { gl: '2-Metilpentano', en: '2-Methylpentane' },
        iupac: '2-methylpentane', formula: 'C₆H₁₄', smiles: 'CCCC(C)C', cas: '107-83-5', pubchemCid: 7892,
        atoms: [
          { element: 'C', pos: [-1.5, 0, 0] }, { element: 'C', pos: [-0.5, 0.5, 0] }, { element: 'C', pos: [0.5, -0.5, 0] }, { element: 'C', pos: [1.5, 0.5, 0] }, { element: 'C', pos: [2.5, -0.5, 0] }, { element: 'C', pos: [-1.5, 1, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 0, end: 5 }]
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
      // C3 (Keep existing)
      {
        id: '1-propanol', carbons: 3,
        name: { gl: '1-Propanol', en: '1-Propanol' },
        iupac: 'Propan-1-ol', formula: 'C₃H₈O', smiles: 'CCCO', cas: '71-23-8', pubchemCid: 1031,
        atoms: [
          { element: 'C', pos: [-1, 0, 0] }, { element: 'C', pos: [0, 0.5, 0] }, { element: 'C', pos: [1, -0.2, 0] }, { element: 'O', pos: [2, 0.5, 0] },
          { element: 'H', pos: [2.5, 0, 0.5] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }]
      },
      {
        id: '2-propanol', carbons: 3,
        name: { gl: '2-Propanol', en: '2-Propanol' },
        iupac: 'Propan-2-ol', formula: 'C₃H₈O', smiles: 'CC(C)O', cas: '67-63-0', pubchemCid: 3776,
        atoms: [
          { element: 'C', pos: [-1.2, -0.5, 0] }, { element: 'C', pos: [0, 0.3, 0] }, { element: 'C', pos: [1.2, -0.5, 0] }, { element: 'O', pos: [0, 1.5, 0] },
          { element: 'H', pos: [0.5, 1.8, 0.6] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 1, end: 3 }, { start: 3, end: 4 }]
      },
      // C4
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
      },
      // C5
      {
        id: '1-pentanol', carbons: 5,
        name: { gl: '1-Pentanol', en: '1-Pentanol' },
        iupac: 'Pentan-1-ol', formula: 'C₅H₁₂O', smiles: 'CCCCCO', cas: '71-41-0', pubchemCid: 6276,
        atoms: [
          { element: 'C', pos: [-2, 0, 0] }, { element: 'C', pos: [-1, 0.5, 0] }, { element: 'C', pos: [0, -0.5, 0] }, { element: 'C', pos: [1, 0.5, 0] }, { element: 'C', pos: [2, -0.5, 0] }, { element: 'O', pos: [3, 0, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 4, end: 5 }]
      },
      {
        id: '2-pentanol', carbons: 5,
        name: { gl: '2-Pentanol', en: '2-Pentanol' },
        iupac: 'Pentan-2-ol', formula: 'C₅H₁₂O', smiles: 'CCCC(O)C', cas: '6032-29-7', pubchemCid: 22386,
        atoms: [
          { element: 'C', pos: [-2, 0, 0] }, { element: 'C', pos: [-1, 0.5, 0] }, { element: 'C', pos: [0, -0.5, 0] }, { element: 'C', pos: [1, 0.5, 0] }, { element: 'C', pos: [2, -0.5, 0] }, { element: 'O', pos: [-1, 1.5, 0] },
        ],
        bonds: [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 1, end: 5 }]
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
      },
      {
        id: 'cis-2-pentene', carbons: 5,
        name: { gl: 'cis-2-Penteno', en: 'cis-2-Pentene' },
        iupac: '(Z)-pent-2-ene', formula: 'C₅H₁₀', smiles: 'CCC=CC', cas: '627-20-3', pubchemCid: 5326160,
        atoms: [
          { element: 'C', pos: [-1.07, -0.18, 0] }, { element: 'C', pos: [0.03, -0.93, 0] }, { element: 'C', pos: [-1.89, 0.62, 0] }, { element: 'C', pos: [1.25, -0.43, 0] }, { element: 'C', pos: [2.2, 0.5, 0] },
        ],
        bonds: [{ start: 0, end: 1, type: 2 }, { start: 0, end: 2 }, { start: 1, end: 3 }, { start: 3, end: 4 }]
      },
      {
        id: 'trans-2-pentene', carbons: 5,
        name: { gl: 'trans-2-Penteno', en: 'trans-2-Pentene' },
        iupac: '(E)-pent-2-ene', formula: 'C₅H₁₀', smiles: 'CC=CCC', cas: '646-04-8', pubchemCid: 5326161,
        atoms: [
          { element: 'C', pos: [1.35, 0.58, 0] }, { element: 'C', pos: [-0.04, 0.40, 0] }, { element: 'C', pos: [2.19, -0.66, 0] }, { element: 'C', pos: [-1.05, -0.07, 0] }, { element: 'C', pos: [-2.2, 0.8, 0] },
        ],
        bonds: [{ start: 0, end: 1, type: 2 }, { start: 0, end: 2 }, { start: 1, end: 3 }, { start: 3, end: 4 }]
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
