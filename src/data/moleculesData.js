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
        id: 'n-butano',
        name: { gl: 'Butano', en: 'Butane' },
        iupac: 'Butane',
        formula: 'C₄H₁₀',
        developedFormula: 'CH₃-CH₂-CH₂-CH₃',
        smiles: 'CCCC',
        cas: '106-97-8',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/Butano',
        pubchemCid: 7843,
        description: {
          gl: 'Cadea lineal de catro átomos de carbono. Usado comunmente como combustible doméstico.',
          en: 'Linear chain of four carbon atoms. Commonly used as domestic fuel.'
        },
        atoms: [
          { element: 'C', pos: [-1.5, 0, 0] }, { element: 'C', pos: [-0.5, 0.5, 0] }, { element: 'C', pos: [0.5, -0.5, 0] }, { element: 'C', pos: [1.5, 0, 0] },
          { element: 'H', pos: [-1.5, -1, 0] }, { element: 'H', pos: [-2, 0.5, 0.8] }, { element: 'H', pos: [-2, 0.5, -0.8] },
          { element: 'H', pos: [-0.5, 1.5, 0.5] }, { element: 'H', pos: [-0.3, 0.5, -1] },
          { element: 'H', pos: [0.3, -0.5, 1] }, { element: 'H', pos: [0.5, -1.5, -0.5] },
          { element: 'H', pos: [1.5, 1, 0] }, { element: 'H', pos: [2, -0.5, 0.8] }, { element: 'H', pos: [2, -0.5, -0.8] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 },
          { start: 0, end: 4 }, { start: 0, end: 5 }, { start: 0, end: 6 },
          { start: 1, end: 7 }, { start: 1, end: 8 }, { start: 2, end: 9 }, { start: 2, end: 10 },
          { start: 3, end: 11 }, { start: 3, end: 12 }, { start: 3, end: 13 },
        ]
      },
      {
        id: 'isobutano',
        name: { gl: 'Isobutano', en: 'Isobutane' },
        iupac: '2-metilpropano',
        formula: 'C₄H₁₀',
        developedFormula: 'CH₃-CH(CH₃)-CH₃',
        smiles: 'CC(C)C',
        cas: '75-28-5',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/Isobutano',
        pubchemCid: 6360,
        description: {
          gl: 'Cadea ramificada cun grupo metilo no carbono central. Ten un punto de ebulición máis baixo que o butano.',
          en: 'Branched chain with a methyl group on the central carbon. It has a lower boiling point than butane.'
        },
        atoms: [
          { element: 'C', pos: [0, 0, 0] }, { element: 'C', pos: [1, 1, 0] }, { element: 'C', pos: [-1, 1, 0] }, { element: 'C', pos: [0, -1.3, 0] },
          { element: 'H', pos: [0, 0, 1] },
          { element: 'H', pos: [1.8, 1.2, 0.5] }, { element: 'H', pos: [1, 1.8, -0.5] }, { element: 'H', pos: [1.2, 0.3, -0.5] },
          { element: 'H', pos: [-1.8, 1.2, -0.5] }, { element: 'H', pos: [-1, 1.8, 0.5] }, { element: 'H', pos: [-1.2, 0.3, 0.5] },
          { element: 'H', pos: [0.8, -1.8, 0.4] }, { element: 'H', pos: [-0.8, -1.8, 0.4] }, { element: 'H', pos: [0, -1.3, -1] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 0, end: 2 }, { start: 0, end: 3 }, { start: 0, end: 4 },
          { start: 1, end: 5 }, { start: 1, end: 6 }, { start: 1, end: 7 },
          { start: 2, end: 8 }, { start: 2, end: 9 }, { start: 2, end: 10 },
          { start: 3, end: 11 }, { start: 3, end: 12 }, { start: 3, end: 13 },
        ]
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
        id: '1-propanol',
        name: { gl: '1-Propanol', en: '1-Propanol' },
        iupac: 'Propan-1-ol',
        formula: 'C₃H₈O',
        developedFormula: 'CH₃-CH₂-CH₂-OH',
        smiles: 'CCCO',
        cas: '71-23-8',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/1-propanol',
        pubchemCid: 1031,
        description: { gl: '', en: '' },
        atoms: [
          { element: 'C', pos: [-1, 0, 0] }, { element: 'C', pos: [0, 0.5, 0] }, { element: 'C', pos: [1, -0.2, 0] }, { element: 'O', pos: [2, 0.5, 0] },
          { element: 'H', pos: [2.5, 0, 0.5] }, { element: 'H', pos: [-1, -1, 0] }, { element: 'H', pos: [-1.5, 0.5, 0.8] }, { element: 'H', pos: [-1.5, 0.5, -0.8] },
          { element: 'H', pos: [0, 1.5, 0.5] }, { element: 'H', pos: [0, 0.5, -1] }, { element: 'H', pos: [1, -1.2, 0.5] }, { element: 'H', pos: [1, -0.2, -1] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 },
          { start: 0, end: 5 }, { start: 0, end: 6 }, { start: 0, end: 7 },
          { start: 1, end: 8 }, { start: 1, end: 9 }, { start: 2, end: 10 }, { start: 2, end: 11 },
        ]
      },
      {
        id: '2-propanol',
        name: { gl: '2-Propanol', en: '2-Propanol' },
        iupac: 'Propan-2-ol',
        formula: 'C₃H₈O',
        developedFormula: 'CH₃-CH(OH)-CH₃',
        smiles: 'CC(C)O',
        cas: '67-63-0',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/Alcol_isopropílico',
        pubchemCid: 3776,
        description: { gl: '', en: '' },
        atoms: [
          { element: 'C', pos: [-1.2, -0.5, 0] }, { element: 'C', pos: [0, 0.3, 0] }, { element: 'C', pos: [1.2, -0.5, 0] }, { element: 'O', pos: [0, 1.5, 0] },
          { element: 'H', pos: [0.5, 1.8, 0.6] },
          { element: 'H', pos: [-1.2, -1.5, 0] }, { element: 'H', pos: [-1.7, -0.2, 0.8] }, { element: 'H', pos: [-1.7, -0.2, -0.8] },
          { element: 'H', pos: [-0.5, 0.3, -1] },
          { element: 'H', pos: [1.2, -1.5, 0] }, { element: 'H', pos: [1.7, -0.2, 0.8] }, { element: 'H', pos: [1.7, -0.2, -0.8] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 1, end: 2 }, { start: 1, end: 3 }, { start: 3, end: 4 },
          { start: 0, end: 5 }, { start: 0, end: 6 }, { start: 0, end: 7 },
          { start: 1, end: 8 }, { start: 2, end: 9 }, { start: 2, end: 10 }, { start: 2, end: 11 },
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
        id: 'cis-2-buteno',
        name: { gl: 'cis-2-Buteno', en: 'cis-2-Butene' },
        iupac: '(Z)-but-2-eno',
        formula: 'C₄H₈',
        developedFormula: 'CH₃-CH=CH-CH₃',
        smiles: 'C/C=C\\C',
        cas: '590-18-1',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/2-buteno',
        pubchemCid: 5287573,
        description: { gl: '', en: '' },
        atoms: [
          { element: 'C', pos: [-0.67, 0, 0] }, { element: 'C', pos: [0.67, 0, 0] }, { element: 'C', pos: [-1.5, 1.2, 0] }, { element: 'C', pos: [1.5, 1.2, 0] },
          { element: 'H', pos: [-0.5, -1, 0] }, { element: 'H', pos: [0.5, -1, 0] },
          { element: 'H', pos: [-2.5, 1.2, 0] }, { element: 'H', pos: [-1.3, 1.8, 0.8] }, { element: 'H', pos: [-1.3, 1.8, -0.8] },
          { element: 'H', pos: [2.5, 1.2, 0] }, { element: 'H', pos: [1.3, 1.8, 0.8] }, { element: 'H', pos: [1.3, 1.8, -0.8] },
        ],
        bonds: [
          { start: 0, end: 1, type: 2 }, { start: 0, end: 2 }, { start: 1, end: 3 },
          { start: 0, end: 4 }, { start: 1, end: 5 },
          { start: 2, end: 6 }, { start: 2, end: 7 }, { start: 2, end: 8 },
          { start: 3, end: 9 }, { start: 3, end: 10 }, { start: 3, end: 11 },
        ]
      },
      {
        id: 'trans-2-buteno',
        name: { gl: 'trans-2-Buteno', en: 'trans-2-Butene' },
        iupac: '(E)-but-2-eno',
        formula: 'C₄H₈',
        developedFormula: 'CH₃-CH=CH-CH₃',
        smiles: 'C/C=C/C',
        cas: '624-64-6',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/2-buteno',
        pubchemCid: 62695,
        description: { gl: '', en: '' },
        atoms: [
          { element: 'C', pos: [-0.67, 0, 0] }, { element: 'C', pos: [0.67, 0, 0] }, { element: 'C', pos: [-1.5, 1.2, 0] }, { element: 'C', pos: [1.5, -1.2, 0] },
          { element: 'H', pos: [-0.5, -1, 0] }, { element: 'H', pos: [0.5, 1, 0] },
          { element: 'H', pos: [-2.5, 1.2, 0] }, { element: 'H', pos: [-1.3, 1.8, 0.8] }, { element: 'H', pos: [-1.3, 1.8, -0.8] },
          { element: 'H', pos: [2.5, -1.2, 0] }, { element: 'H', pos: [1.3, -1.8, 0.8] }, { element: 'H', pos: [1.3, -1.8, -0.8] },
        ],
        bonds: [
          { start: 0, end: 1, type: 2 }, { start: 0, end: 2 }, { start: 1, end: 3 },
          { start: 0, end: 4 }, { start: 1, end: 5 },
          { start: 2, end: 6 }, { start: 2, end: 7 }, { start: 2, end: 8 },
          { start: 3, end: 9 }, { start: 3, end: 10 }, { start: 3, end: 11 },
        ]
      }
    ]
  },
  {
    id: 'estereoisomeria-optica',
    title: { gl: 'Isomería Óptica', en: 'Optical Isomerism' },
    description: {
      gl: 'Enantiómeros: moléculas que son imaxes especulares non superpoñibles.',
      en: 'Enantiomers: molecules that are non-superimposable mirror images.'
    },
    isomers: [
      {
        id: 'r-lactic-acid',
        name: { gl: 'Ácido (R)-láctico', en: '(R)-Lactic acid' },
        iupac: 'Ácido (2R)-2-hidroxipropanoico',
        formula: 'C₃H₆O₃',
        developedFormula: 'CH₃-CH(OH)-COOH',
        smiles: 'C[C@H](O)C(=O)O',
        cas: '10326-41-7',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/Ácido_láctico',
        pubchemCid: 61503,
        description: { gl: '', en: '' },
        atoms: [
          { element: 'C', pos: [0, 0, 0] }, { element: 'C', pos: [0, 1.5, 0] }, { element: 'C', pos: [1.3, -0.6, 0.5] }, { element: 'O', pos: [-1.3, -0.6, 0.5] },
          { element: 'H', pos: [0, -0.5, -1] }, { element: 'O', pos: [-0.8, 2.3, 0.4] }, { element: 'O', pos: [0.8, 2.0, -0.8] }, { element: 'H', pos: [1.5, 1.5, -1.0] },
          { element: 'H', pos: [-1.8, -0.1, 0.1] }, { element: 'H', pos: [2.2, -0.1, 0.2] }, { element: 'H', pos: [1.3, -1.7, 0.4] }, { element: 'H', pos: [1.1, -0.3, 1.5] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 0, end: 2 }, { start: 0, end: 3 }, { start: 0, end: 4 },
          { start: 1, end: 5, type: 2 }, { start: 1, end: 6 }, { start: 6, end: 7 },
          { start: 3, end: 8 }, { start: 2, end: 9 }, { start: 2, end: 10 }, { start: 2, end: 11 },
        ]
      },
      {
        id: 's-lactic-acid',
        name: { gl: 'Ácido (S)-láctico', en: '(S)-Lactic acid' },
        iupac: 'Ácido (2S)-2-hidroxipropanoico',
        formula: 'C₃H₆O₃',
        developedFormula: 'CH₃-CH(OH)-COOH',
        smiles: 'C[C@@H](O)C(=O)O',
        cas: '79-33-4',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/Ácido_láctico',
        pubchemCid: 107689,
        description: { gl: '', en: '' },
        atoms: [
          { element: 'C', pos: [0, 0, 0] }, { element: 'C', pos: [0, 1.5, 0] }, { element: 'C', pos: [-1.3, -0.6, 0.5] }, { element: 'O', pos: [1.3, -0.6, 0.5] },
          { element: 'H', pos: [0, -0.5, -1] }, { element: 'O', pos: [0.8, 2.3, 0.4] }, { element: 'O', pos: [-0.8, 2.0, -0.8] }, { element: 'H', pos: [-1.5, 1.5, -1.0] },
          { element: 'H', pos: [1.8, -0.1, 0.1] }, { element: 'H', pos: [-2.2, -0.1, 0.2] }, { element: 'H', pos: [-1.3, -1.7, 0.4] }, { element: 'H', pos: [-1.1, -0.3, 1.5] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 0, end: 2 }, { start: 0, end: 3 }, { start: 0, end: 4 },
          { start: 1, end: 5, type: 2 }, { start: 1, end: 6 }, { start: 6, end: 7 },
          { start: 3, end: 8 }, { start: 2, end: 9 }, { start: 2, end: 10 }, { start: 2, end: 11 },
        ]
      }
    ]
  },
  {
    id: 'isomería-conformacional',
    title: { gl: 'Isomería Conformacional', en: 'Conformational Isomerism' },
    description: {
      gl: 'Diferentes formas dunha mesma molécula debido á rotación de enlaces simples.',
      en: 'Different shapes of the same molecule due to rotation around single bonds.'
    },
    isomers: [
      {
        id: 'ciclohexano-cadeira',
        name: { gl: 'Cliclohexano (Cadeira)', en: 'Cyclohexane (Chair)' },
        iupac: 'Ciclohexano',
        formula: 'C₆H₁₂',
        developedFormula: 'C₆H₁₂ (Cyclic)',
        smiles: 'C1CCCCC1',
        cas: '110-82-7',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/Ciclohexano',
        pubchemCid: 8078,
        description: {
          gl: 'Conformación máis estable. Minimiza a repulsión eclipsada e a tensión de anel.',
          en: 'Most stable conformation. Minimizes eclipsed repulsion and ring strain.'
        },
        atoms: [
          { element: 'C', pos: [1.0, 0, 0.3] },
          { element: 'C', pos: [0.5, 0.86, -0.3] },
          { element: 'C', pos: [-0.5, 0.86, 0.3] },
          { element: 'C', pos: [-1.0, 0, -0.3] },
          { element: 'C', pos: [-0.5, -0.86, 0.3] },
          { element: 'C', pos: [0.5, -0.86, -0.3] },
          { element: 'H', pos: [1.5, 0, 1.25] }, { element: 'H', pos: [1.8, -0.3, -0.3] },
          { element: 'H', pos: [0.5, 1.5, -1.25] }, { element: 'H', pos: [0.8, 1.8, 0.3] },
          { element: 'H', pos: [-0.5, 1.5, 1.25] }, { element: 'H', pos: [-0.8, 1.8, -0.3] },
          { element: 'H', pos: [-1.5, 0, -1.25] }, { element: 'H', pos: [-1.8, -0.3, 0.3] },
          { element: 'H', pos: [-0.5, -1.5, 1.25] }, { element: 'H', pos: [-0.8, -1.8, -0.3] },
          { element: 'H', pos: [0.5, -1.5, -1.25] }, { element: 'H', pos: [0.8, -1.8, 0.3] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 4, end: 5 }, { start: 5, end: 0 },
          { start: 0, end: 6 }, { start: 0, end: 7 },
          { start: 1, end: 8 }, { start: 1, end: 9 },
          { start: 2, end: 10 }, { start: 2, end: 11 },
          { start: 3, end: 12 }, { start: 3, end: 13 },
          { start: 4, end: 14 }, { start: 4, end: 15 },
          { start: 5, end: 16 }, { start: 5, end: 17 },
        ]
      },
      {
        id: 'ciclohexano-bote',
        name: { gl: 'Ciclohexano (Bote)', en: 'Cyclohexane (Boat)' },
        iupac: 'Ciclohexano',
        formula: 'C₆H₁₂',
        developedFormula: 'C₆H₁₂ (Cyclic)',
        smiles: 'C1CCCCC1',
        cas: '110-82-7',
        wikipediaUrl: 'https://gl.wikipedia.org/wiki/Ciclohexano',
        pubchemCid: 8078,
        description: {
          gl: 'Conformación de alta enerxía. Presenta tensión polo eclipsamento de enlaces C-H.',
          en: 'High energy conformation. Features strain due to eclipsing of C-H bonds.'
        },
        atoms: [
          { element: 'C', pos: [1.0, 0, 0.5] },
          { element: 'C', pos: [0.5, 0.86, 0] },
          { element: 'C', pos: [-0.5, 0.86, 0] },
          { element: 'C', pos: [-1.0, 0, 0.5] },
          { element: 'C', pos: [-0.5, -0.86, 0] },
          { element: 'C', pos: [0.5, -0.86, 0] },
          { element: 'H', pos: [1.2, 0, 1.6] }, { element: 'H', pos: [1.8, 0, -0.1] },
          { element: 'H', pos: [0.6, 1.5, 0.6] }, { element: 'H', pos: [0.8, 1.2, -0.8] },
          { element: 'H', pos: [-0.6, 1.5, 0.6] }, { element: 'H', pos: [-0.8, 1.2, -0.8] },
          { element: 'H', pos: [-1.2, 0, 1.6] }, { element: 'H', pos: [-1.8, 0, -0.1] },
          { element: 'H', pos: [-0.6, -1.5, 0.6] }, { element: 'H', pos: [-0.8, -1.2, -0.8] },
          { element: 'H', pos: [0.6, -1.5, 0.6] }, { element: 'H', pos: [0.8, -1.2, -0.8] },
        ],
        bonds: [
          { start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 4, end: 5 }, { start: 5, end: 0 },
          { start: 0, end: 6 }, { start: 0, end: 7 },
          { start: 1, end: 8 }, { start: 1, end: 9 },
          { start: 2, end: 10 }, { start: 2, end: 11 },
          { start: 3, end: 12 }, { start: 3, end: 13 },
          { start: 4, end: 14 }, { start: 4, end: 15 },
          { start: 5, end: 16 }, { start: 5, end: 17 },
        ]
      }
    ]
  }
];
