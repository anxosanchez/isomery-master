export const ATOM_STYLES = {
  C: { color: '#444444', radius: 0.4 },
  H: { color: '#ffffff', radius: 0.25 },
  O: { color: '#ff3333', radius: 0.35 },
  N: { color: '#3333ff', radius: 0.35 },
  Cl: { color: '#33ff33', radius: 0.45 },
};

export const isomerGroups = [
  {
    id: 'estructural',
    title: { gl: '1. Isomería Estrutural', en: '1. Structural Isomerism', es: '1. Isomería Estructural' },
    description: { 
      gl: 'Neste tipo, os átomos están conectados nunha orde diferente, cambiando a conectividade estrutural da molécula.',
      en: 'In this type, atoms are connected in a different order, changing the structural connectivity of the molecule.',
      es: 'En este tipo, los átomos están conectados en un orden diferente, cambiando la conectividad estructural de la molécula.'
    },
    subtypes: [
      {
        id: 'estructural-cadea',
        title: { gl: 'Isomería de Cadea', en: 'Chain Isomerism', es: 'Isomería de Cadena' },
        description: {
          gl: 'O esqueleto de carbonos é distinto, variando a lonxitude da cadea principal ou a presenza e tipo de ramificacións.',
          en: 'The carbon skeleton is different, varying the length of the main chain or the presence and type of branches.',
          es: 'El esqueleto de carbonos es distinto, variando la longitud de la cadena principal o la presencia y tipo de ramificaciones.'
        },
        isomers: [
          {
            id: 'n-butano', carbons: 4,
            name: { gl: 'n-Butano', en: 'n-Butane', es: 'n-Butano' },
            iupac: 'Butane', formula: 'C₄H₁₀', smiles: 'CCCC', cas: '106-97-8', pubchemCid: 7843,
            atoms: [
              {element: 'C', pos: [-0.563, 0.516, 0.0071]}, {element: 'C', pos: [0.563, -0.5159, 0.0071]}, 
              {element: 'C', pos: [-1.9293, -0.1506, -0.0071]}, {element: 'C', pos: [1.9294, 0.1505, -0.0071]},
              {element: 'H', pos: [-0.4724, 1.1666, -0.8706]}, {element: 'H', pos: [-0.4825, 1.1551, 0.894]},
              {element: 'H', pos: [0.4825, -1.1551, 0.894]}, {element: 'H', pos: [0.4723, -1.1665, -0.8706]},
              {element: 'H', pos: [-2.0542, -0.771, -0.9003]}, {element: 'H', pos: [-2.0651, -0.7856, 0.8742]},
              {element: 'H', pos: [-2.7203, 0.606, -0.0058]}, {element: 'H', pos: [2.0542, 0.7709, -0.9003]},
              {element: 'H', pos: [2.7202, -0.6062, -0.0059]}, {element: 'H', pos: [2.0652, 0.7854, 0.8743]}
            ],
            bonds: [
              {start: 0, end: 1}, {start: 0, end: 2}, {start: 0, end: 4}, {start: 0, end: 5},
              {start: 1, end: 3}, {start: 1, end: 6}, {start: 1, end: 7},
              {start: 2, end: 8}, {start: 2, end: 9}, {start: 2, end: 10},
              {start: 3, end: 11}, {start: 3, end: 12}, {start: 3, end: 13}
            ]
          },
          {
            id: 'isobutano', carbons: 4,
            name: { gl: 'Isobutano', en: 'Isobutane', es: 'Isobutano' },
            iupac: '2-methylpropane', formula: 'C₄H₁₀', smiles: 'CC(C)C', cas: '75-28-5', pubchemCid: 6360,
            atoms: [
              {element: 'C', pos: [0, 0, -0.3603]}, {element: 'C', pos: [-0.5345, 1.3473, 0.1201]},
              {element: 'C', pos: [1.4342, -0.2109, 0.1201]}, {element: 'C', pos: [-0.8997, -1.1365, 0.1201]},
              {element: 'H', pos: [0.0, 0.0, -1.4571]}, {element: 'H', pos: [-0.5557, 1.4007, 1.2139]},
              {element: 'H', pos: [0.0922, 2.1671, -0.2469]}, {element: 'H', pos: [-1.5526, 1.5147, -0.2469]},
              {element: 'H', pos: [1.491, -0.2192, 1.214]}, {element: 'H', pos: [2.0882, 0.5872, -0.2468]},
              {element: 'H', pos: [1.8308, -1.1634, -0.2469]}, {element: 'H', pos: [-0.9354, -1.1816, 1.2139]},
              {element: 'H', pos: [-0.5355, -2.102, -0.2469]}, {element: 'H', pos: [-1.923, -1.0036, -0.2469]}
            ],
            bonds: [
              {start: 0, end: 1}, {start: 0, end: 2}, {start: 0, end: 3}, {start: 0, end: 4},
              {start: 1, end: 5}, {start: 1, end: 6}, {start: 1, end: 7},
              {start: 2, end: 8}, {start: 2, end: 9}, {start: 2, end: 10},
              {start: 3, end: 11}, {start: 3, end: 12}, {start: 3, end: 13}
            ]
          }
        ]
      },
      {
        id: 'estructural-posicion',
        title: { gl: 'Isomería de Posición', en: 'Position Isomerism', es: 'Isomería de Posición' },
        description: {
          gl: 'O grupo funcional, o dobre enlace ou o triple enlace sitúase nunha posición distinta dentro da mesma cadea de carbonos.',
          en: 'The functional group, double bond or triple bond is located in a different position within the same carbon chain.',
          es: 'El grupo funcional, el doble enlace o el triple enlace se sitúa en una posición distinta dentro de la misma cadena carbonada.'
        },
        isomers: [
          {
            id: '1-propanol', carbons: 3,
            name: { gl: '1-Propanol', en: '1-Propanol', es: '1-Propanol' },
            iupac: 'Propan-1-ol', formula: 'C₃H₈O', smiles: 'CCCO', cas: '71-23-8', pubchemCid: 1031,
            atoms: [
              {element: 'O', pos: [1.8381, -0.1603, -0.0038]}, {element: 'C', pos: [-0.53, -0.5081, 0.0038]}, 
              {element: 'C', pos: [0.5908, 0.52, 0.0036]}, {element: 'C', pos: [-1.8989, 0.1484, -0.0036]},
              {element: 'H', pos: [-0.4276, -1.1648, -0.8685]}, {element: 'H', pos: [-0.4365, -1.1579, 0.8822]},
              {element: 'H', pos: [0.5433, 1.153, -0.8878]}, {element: 'H', pos: [0.5477, 1.1632, 0.8882]},
              {element: 'H', pos: [-2.03, 0.7717, -0.8939]}, {element: 'H', pos: [-2.6851, -0.613, -0.0032]},
              {element: 'H', pos: [-2.036, 0.7789, 0.8808]}, {element: 'H', pos: [1.8848, -0.6971, 0.8057]}
            ],
            bonds: [
              {start: 0, end: 2}, {start: 0, end: 11}, {start: 1, end: 2}, {start: 1, end: 3}, 
              {start: 1, end: 4}, {start: 1, end: 5}, {start: 2, end: 6}, {start: 2, end: 7},
              {start: 3, end: 8}, {start: 3, end: 9}, {start: 3, end: 10}
            ]
          },
          {
            id: '2-propanol', carbons: 3,
            name: { gl: '2-Propanol', en: '2-Propanol', es: '2-Propanol' },
            iupac: 'Propan-2-ol', formula: 'C₃H₈O', smiles: 'CC(C)O', cas: '67-63-0', pubchemCid: 3776,
            atoms: [
              {element: 'O', pos: [-0.0004, 1.3572, -0.1242]}, {element: 'C', pos: [0, 0.0177, 0.3601]},
              {element: 'C', pos: [-1.2599, -0.6878, -0.1179]}, {element: 'C', pos: [1.2603, -0.6871, -0.1179]},
              {element: 'H', pos: [-0.0001, 0.0646, 1.454]}, {element: 'H', pos: [-1.3079, -1.7139, 0.259]},
              {element: 'H', pos: [-2.1507, -0.1484, 0.2213]}, {element: 'H', pos: [-1.3061, -0.7138, -1.2122]},
              {element: 'H', pos: [1.3089, -1.7132, 0.259]}, {element: 'H', pos: [2.1508, -0.1471, 0.2213]},
              {element: 'H', pos: [1.3066, -0.7131, -1.2122]}, {element: 'H', pos: [-0.0006, 1.3242, -1.0961]}
            ],
            bonds: [
              {start: 0, end: 1}, {start: 0, end: 11}, {start: 1, end: 2}, {start: 1, end: 3},
              {start: 1, end: 4}, {start: 2, end: 5}, {start: 2, end: 6}, {start: 2, end: 7},
              {start: 3, end: 8}, {start: 3, end: 9}, {start: 3, end: 10}
            ]
          },
          {
            id: 'o-xylene', carbons: 8,
            name: { gl: 'o-Xileno', en: 'o-Xylene', es: 'o-Xileno' },
            iupac: '1,2-dimethylbenzene', formula: 'C₈H₁₀', smiles: 'CC1=CC=CC=C1C', cas: '95-47-6', pubchemCid: 7237,
            atoms: [
              {element: 'C', pos: [0.5857, 0.6975, 0]}, {element: 'C', pos: [0.5859, -0.6974, 0.0003]},
              {element: 'C', pos: [-0.6224, 1.3948, -0.0001]}, {element: 'C', pos: [-0.622, -1.3949, 0.0001]},
              {element: 'C', pos: [1.8664, 1.4659, 0]}, {element: 'C', pos: [1.8667, -1.4656, -0.0002]},
              {element: 'C', pos: [-1.8303, 0.6973, -0.0001]}, {element: 'C', pos: [-1.8301, -0.6976, -0.0001]},
              {element: 'H', pos: [-0.6407, 2.4815, -0.0002]}, {element: 'H', pos: [-0.6402, -2.4816, -0.0001]},
              {element: 'H', pos: [2.4545, 1.2356, 0.8944]}, {element: 'H', pos: [2.4555, 1.2339, -0.8932]},
              {element: 'H', pos: [1.6907, 2.5473, -0.0012]}, {element: 'H', pos: [2.4564, -1.2331, 0.8925]},
              {element: 'H', pos: [1.6911, -2.547, 0.0017]}, {element: 'H', pos: [2.4541, -1.2356, -0.8951]},
              {element: 'H', pos: [-2.7711, 1.24, -0.0001]}, {element: 'H', pos: [-2.7707, -1.2405, -0.0002]}
            ],
            bonds: [
              {start: 0, end: 1}, {start: 0, end: 2, type: 2}, {start: 0, end: 4},
              {start: 1, end: 3, type: 2}, {start: 1, end: 5}, {start: 2, end: 6}, {start: 2, end: 8},
              {start: 3, end: 7}, {start: 3, end: 9}, {start: 4, end: 10}, {start: 4, end: 11},
              {start: 4, end: 12}, {start: 5, end: 13}, {start: 5, end: 14}, {start: 5, end: 15},
              {start: 6, end: 7, type: 2}, {start: 6, end: 16}, {start: 7, end: 17}
            ]
          }
        ]
      },
      {
        id: 'estructural-funcion',
        title: { gl: 'Isomería de Función', en: 'Functional Isomerism', es: 'Isomería de Función' },
        description: {
          gl: 'Os compostos presentan distintos grupos funcionais, polo que pertencen a familias químicas diferentes, a pesar de ter a mesma fórmula molecular.',
          en: 'Compounds have different functional groups, so they belong to different chemical families, despite having the same molecular formula.',
          es: 'Los compuestos presentan distintos grupos funcionales, por lo que pertenecen a familias químicas diferentes, a pesar de tener la misma fórmula molecular.'
        },
        isomers: [
          {
            id: 'etanol', carbons: 2,
            name: { gl: 'Etanol', en: 'Ethanol', es: 'Etanol' },
            iupac: 'Ethanol', formula: 'C₂H₆O', smiles: 'CCO', cas: '64-17-5', pubchemCid: 702,
            atoms: [
              {element: 'O', pos: [-1.1712, 0.2997, 0]}, {element: 'C', pos: [-0.0463, -0.5665, 0]},
              {element: 'C', pos: [1.2175, 0.2668, 0]}, {element: 'H', pos: [-0.0958, -1.212, 0.8819]},
              {element: 'H', pos: [-0.0952, -1.1938, -0.8946]}, {element: 'H', pos: [2.105, -0.372, -0.0177]},
              {element: 'H', pos: [1.2426, 0.9307, -0.8704]}, {element: 'H', pos: [1.2616, 0.9052, 0.8886]},
              {element: 'H', pos: [-1.1291, 0.8364, 0.8099]}
            ],
            bonds: [
              {start: 0, end: 1}, {start: 0, end: 8}, {start: 1, end: 2}, {start: 1, end: 3},
              {start: 1, end: 4}, {start: 2, end: 5}, {start: 2, end: 6}, {start: 2, end: 7}
            ]
          },
          {
            id: 'dimetil-eter', carbons: 2,
            name: { gl: 'Dimetil éter', en: 'Dimethyl ether', es: 'Dimetil éter' },
            iupac: 'Methoxymethane', formula: 'C₂H₆O', smiles: 'COC', cas: '115-10-6', pubchemCid: 8054,
            atoms: [
              {element: 'O', pos: [0, 0.4851, 0]}, {element: 'C', pos: [-1.1691, -0.3426, 0]},
              {element: 'C', pos: [1.1691, -0.3426, 0]}, {element: 'H', pos: [-1.189, -0.9701, 0.892]},
              {element: 'H', pos: [-2.0287, 0.3235, 0]}, {element: 'H', pos: [-1.189, -0.9701, -0.892]},
              {element: 'H', pos: [1.189, -0.9701, 0.892]}, {element: 'H', pos: [2.0287, 0.3235, 0]},
              {element: 'H', pos: [1.189, -0.9701, -0.892]}
            ],
            bonds: [
              {start: 0, end: 1}, {start: 0, end: 2}, {start: 1, end: 3}, {start: 1, end: 4},
              {start: 1, end: 5}, {start: 2, end: 6}, {start: 2, end: 7}, {start: 2, end: 8}
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'estereoisomeria',
    title: { gl: '2. Estereoisomería', en: '2. Stereoisomerism', es: '2. Estereoisomería' },
    description: {
      gl: 'Aquí, os átomos teñen a mesma conectividade, pero difiren exclusivamente en como se orientan tridimensionalmente no espazo.',
      en: 'Here, atoms have the same connectivity, but differ exclusively in how they are oriented three-dimensionally in space.',
      es: 'Aquí, los átomos tienen la misma conectividad (están unidos en el mismo orden), pero difieren exclusivamente en cómo se orientan tridimensionalmente en el espacio.'
    },
    subtypes: [
      {
        id: 'estereoisomeria-conformacional',
        title: { gl: 'A. Isomería Conformacional', en: 'A. Conformational Isomerism', es: 'A. Isomería Conformacional' },
        description: {
          gl: 'Son distintas disposicións espaciais que se poden interconverter simplemente pola rotación libre ao redor de enlaces simples (sigma).',
          en: 'They are different spatial arrangements that can be interconverted simply by free rotation around single bonds (sigma).',
          es: 'Son distintas disposiciones espaciales que se pueden interconvertir simplemente por la rotación libre en torno a enlaces simples (enlaces sigma), sin que sea necesario romper ningún enlace químico.'
        },
        isomers: [
          {
            id: 'etano-staggered', carbons: 2,
            name: { gl: 'Etano (Alternado)', en: 'Ethane (Staggered)', es: 'Etano (Alternado)' },
            iupac: 'Ethane', formula: 'C₂H₆', smiles: 'CC', cas: '74-84-0', pubchemCid: 6324,
            atoms: [
              {element: 'C', pos: [0.765, 0, 0]}, {element: 'C', pos: [-0.765, 0, 0]},
              {element: 'H', pos: [1.11, 0, 1.026]}, {element: 'H', pos: [1.11, 0.888, -0.513]},
              {element: 'H', pos: [1.11, -0.888, -0.513]}, {element: 'H', pos: [-1.11, 0, -1.026]},
              {element: 'H', pos: [-1.11, -0.888, 0.513]}, {element: 'H', pos: [-1.11, 0.888, 0.513]}
            ],
            bonds: [
              {start: 0, end: 1}, {start: 0, end: 2}, {start: 0, end: 3}, {start: 0, end: 4},
              {start: 1, end: 5}, {start: 1, end: 6}, {start: 1, end: 7}
            ]
          },
          {
            id: 'etano-eclipsed', carbons: 2,
            name: { gl: 'Etano (Eclipsado)', en: 'Ethane (Eclipsed)', es: 'Etano (Eclipsado)' },
            iupac: 'Ethane', formula: 'C₂H₆', smiles: 'CC', cas: '74-84-0', pubchemCid: 6324,
            atoms: [
              {element: 'C', pos: [0.765, 0, 0]}, {element: 'C', pos: [-0.765, 0, 0]},
              {element: 'H', pos: [1.11, 0, 1.026]}, {element: 'H', pos: [1.11, 0.888, -0.513]},
              {element: 'H', pos: [1.11, -0.888, -0.513]}, {element: 'H', pos: [-1.11, 0, 1.026]},
              {element: 'H', pos: [-1.11, 0.888, -0.513]}, {element: 'H', pos: [-1.11, -0.888, -0.513]}
            ],
            bonds: [
              {start: 0, end: 1}, {start: 0, end: 2}, {start: 0, end: 3}, {start: 0, end: 4},
              {start: 1, end: 5}, {start: 1, end: 6}, {start: 1, end: 7}
            ]
          },
          {
            id: 'ciclohexano-cadeira', carbons: 6,
            name: { gl: 'Ciclohexano (Cadeira)', en: 'Cyclohexane (Chair)', es: 'Ciclohexano (Silla)' },
            iupac: 'Cyclohexane', formula: 'C₆H₁₂', smiles: 'C1CCCCC1', cas: '110-82-7', pubchemCid: 8078,
            atoms: [
              {element: 'C', pos: [0.8653, -0.4996, 0.2312]}, {element: 'C', pos: [0.8653, 0.4996, -0.2312]},
              {element: 'C', pos: [-0.4326, 1.249, 0.2312]}, {element: 'C', pos: [-1.2979, 0, -0.2313]},
              {element: 'C', pos: [-0.4326, -1.249, 0.2312]}, {element: 'C', pos: [0.4326, -0.7494, -0.2313]},
              {element: 'H', pos: [0.8653, -0.4996, 1.3283]}, {element: 'H', pos: [1.7305, -1.1492, -0.1541]},
              {element: 'H', pos: [0.8653, 0.4996, -1.3283]}, {element: 'H', pos: [1.7305, 1.1492, 0.1541]},
              {element: 'H', pos: [-0.4326, 1.249, 1.3283]}, {element: 'H', pos: [-0.4326, 2.298, -0.1542]},
              {element: 'H', pos: [-1.2979, 0, -1.3284]}, {element: 'H', pos: [-2.2955, 0, 0.1542]},
              {element: 'H', pos: [-0.4326, -1.249, 1.3283]}, {element: 'H', pos: [-0.4326, -2.298, -0.1542]},
              {element: 'H', pos: [0.4326, -0.7494, -1.3284]}, {element: 'H', pos: [0.4326, -1.5488, 0.1542]}
            ],
            bonds: [
              {start: 0, end: 1}, {start: 1, end: 2}, {start: 2, end: 3}, {start: 3, end: 4},
              {start: 4, end: 5}, {start: 5, end: 0}, {start: 0, end: 6}, {start: 0, end: 7},
              {start: 1, end: 8}, {start: 1, end: 9}, {start: 2, end: 10}, {start: 2, end: 11},
              {start: 3, end: 12}, {start: 3, end: 13}, {start: 4, end: 14}, {start: 4, end: 15},
              {start: 5, end: 16}, {start: 5, end: 17}
            ]
          }
        ]
      },
      {
        id: 'estereoisomeria-configuracional',
        title: { gl: 'B. Isomería Configuracional', en: 'B. Configurational Isomerism', es: 'B. Isomería Configuracional' },
        description: {
          gl: 'Estas formas non se poden interconverter mediante unha simple rotación. É necesario romper e formar enlaces químicos.',
          en: 'These forms cannot be interconverted by simple rotation. It is necessary to break and form chemical bonds.',
          es: 'A diferencia de los confórmeros, estas formas no se pueden interconvertir mediante una simple rotación. Para pasar de un isómero configuracional a otro, es estrictamente necesario romper y formar enlaces químicos.'
        },
        subtypes: [
          {
            id: 'estereoisomeria-geometrica',
            title: { gl: 'B.1. Isomería Xeométrica', en: 'B.1. Geometric Isomerism', es: 'B.1. Isomería Geométrica' },
            description: {
              gl: 'Ocorre debido á rixidez espacial que impide a rotación libre, tipicamente causada por un dobre enlace ou un ciclo.',
              en: 'Occurs due to spatial rigidity that prevents free rotation, typically caused by a double bond or a ring.',
              es: 'Ocurre debido a la rigidez espacial que impide la rotación libre, típicamente causada por la presencia de un doble enlace carbono-carbono o por la estructura de un ciclo.'
            },
            isomers: [
              {
                id: 'cis-2-buteno', carbons: 4,
                name: { gl: 'cis-2-Buteno', en: 'cis-2-Butene', es: 'cis-2-Buteno' },
                iupac: '(Z)-but-2-ene', formula: 'C₄H₈', smiles: 'C/C=C\\C', cas: '590-18-1', pubchemCid: 5287573,
                atoms: [
                  {element: 'C', pos: [-0.6703, 0.62, 0]}, {element: 'C', pos: [0.6702, 0.62, 0]},
                  {element: 'C', pos: [-1.5014, -0.6201, 0]}, {element: 'C', pos: [1.5015, -0.62, 0]},
                  {element: 'H', pos: [-1.1945, 1.5716, 0.0113]}, {element: 'H', pos: [1.1943, 1.5718, -0.0113]},
                  {element: 'H', pos: [-2.3834, -0.4587, -0.6295]}, {element: 'H', pos: [-0.9908, -1.4974, -0.4042]},
                  {element: 'H', pos: [-1.85, -0.8414, 1.0132]}, {element: 'H', pos: [2.3833, -0.4586, 0.63]},
                  {element: 'H', pos: [0.9908, -1.4974, 0.4036]}, {element: 'H', pos: [1.8506, -0.8408, -1.0131]}
                ],
                bonds: [
                  {start: 0, end: 1, type: 2}, {start: 0, end: 2}, {start: 0, end: 4}, 
                  {start: 1, end: 3}, {start: 1, end: 5}, {start: 2, end: 6}, {start: 2, end: 7}, 
                  {start: 2, end: 8}, {start: 3, end: 9}, {start: 3, end: 10}, {start: 3, end: 11}
                ]
              },
              {
                id: 'trans-2-buteno', carbons: 4,
                name: { gl: 'trans-2-Buteno', en: 'trans-2-Butene', es: 'trans-2-Buteno' },
                iupac: '(E)-but-2-ene', formula: 'C₄H₈', smiles: 'C/C=C/C', cas: '624-64-6', pubchemCid: 62695,
                atoms: [
                  {element: 'C', pos: [-0.5402, -0.3969, -0.0002]}, {element: 'C', pos: [0.5401, 0.3968, -0.0002]},
                  {element: 'C', pos: [-1.9442, 0.1103, 0.0002]}, {element: 'C', pos: [1.9442, -0.1102, 0.0002]},
                  {element: 'H', pos: [-0.4135, -1.4763, -0.0001]}, {element: 'H', pos: [0.4133, 1.4763, -0.0002]},
                  {element: 'H', pos: [-2.4714, -0.2536, 0.8874]}, {element: 'H', pos: [-1.9907, 1.2039, 0.0004]},
                  {element: 'H', pos: [-2.4718, -0.2533, -0.8868]}, {element: 'H', pos: [2.4714, 0.2537, 0.8874]},
                  {element: 'H', pos: [1.991, -1.2038, 0.0003]}, {element: 'H', pos: [2.4718, 0.2536, -0.8868]}
                ],
                bonds: [
                  {start: 0, end: 1, type: 2}, {start: 0, end: 2}, {start: 0, end: 4},
                  {start: 1, end: 3}, {start: 1, end: 5}, {start: 2, end: 6}, {start: 2, end: 7},
                  {start: 2, end: 8}, {start: 3, end: 9}, {start: 3, end: 10}, {start: 3, end: 11}
                ]
              }
            ]
          },
          {
            id: 'estereoisomeria-optica',
            title: { gl: 'B.2. Isomería Óptica', en: 'B.2. Optical Isomerism', es: 'B.2. Isomería Óptica' },
            description: {
              gl: 'Dase en moléculas quirais, que non se poden superpoñer coa súa imaxe no espello.',
              en: 'Occurs in chiral molecules, which cannot be superimposed on their mirror image.',
              es: 'Se da en moléculas que son quirales, lo que significa que no se pueden superponer perfectamente con su imagen en el espejo (como tu mano derecha y tu mano izquierda).'
            },
            isomers: [
              {
                id: 'r-lactic-acid', carbons: 3,
                name: { gl: 'Ácido (R)-láctico', en: '(R)-Lactic acid', es: 'Ácido (R)-láctico' },
                iupac: '(2R)-2-hydroxypropanoic acid', formula: 'C₃H₆O₃', smiles: 'C[C@H](O)C(=O)O', cas: '10326-41-7', pubchemCid: 61503,
                atoms: [
                  {element: 'O', pos: [-1.3283, -0.6698, -0.8927]}, {element: 'O', pos: [0.7303, 1.3968, 0.1388]},
                  {element: 'O', pos: [-1.3482, 1.1594, -0.0634]}, {element: 'C', pos: [0.0305, 0.0401, 0.1764]},
                  {element: 'C', pos: [1.328, -0.584, -0.3475]}, {element: 'C', pos: [-0.6402, 0.7061, -0.1983]},
                  {element: 'H', pos: [0.0454, -0.2241, 1.2359]}, {element: 'H', pos: [2.1477, -0.1866, 0.2568]},
                  {element: 'H', pos: [1.3094, -1.6708, -0.2526]}, {element: 'H', pos: [1.528, -0.3346, -1.3942]},
                  {element: 'H', pos: [-2.1818, -0.2255, -0.7961]}, {element: 'H', pos: [0.301, 2.053, 0.701]}
                ],
                bonds: [
                  {start: 0, end: 5}, {start: 0, end: 10}, {start: 1, end: 5, type: 2}, 
                  {start: 2, end: 5}, {start: 2, end: 11}, {start: 3, end: 4}, {start: 3, end: 5}, 
                  {start: 3, end: 6}, {start: 4, end: 7}, {start: 4, end: 8}, {start: 4, end: 9}
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
