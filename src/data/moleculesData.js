// Atom styles: colors and radii
export const ATOM_STYLES = {
  C: { color: '#444444', radius: 0.4 },
  H: { color: '#ffffff', radius: 0.25 },
  O: { color: '#ff3333', radius: 0.35 },
  N: { color: '#3333ff', radius: 0.35 },
  Cl: { color: '#33ff33', radius: 0.45 },
};

export const isomerGroups = [
  {
    "id": "estructural",
    "title": {
      "gl": "1. Isomer\u00eda Estrutural",
      "en": "1. Structural Isomerism",
      "es": "1. Isomer\u00eda Estructural"
    },
    "description": {
      "gl": "Neste tipo, os \u00e1tomos est\u00e1n conectados nunha orde diferente, cambiando a conectividade estrutural da mol\u00e9cula.",
      "en": "In this type, atoms are connected in a different order, changing the structural connectivity of the molecule.",
      "es": "En este tipo, los \u00e1tomos est\u00e1n conectados en un orden diferente, cambiando la conectividad estructural de la mol\u00e9cula."
    },
    "subtypes": [
      {
        "id": "estructural-cadea",
        "title": {
          "gl": "Isomer\u00eda de Cadea",
          "en": "Chain Isomerism",
          "es": "Isomer\u00eda de Cadena"
        },
        "description": {
          "gl": "O esqueleto de carbonos \u00e9 distinto, variando a lonxitude da cadea principal ou a presenza e tipo de ramificaci\u00f3ns.",
          "en": "The carbon skeleton is different, varying the length of the main chain or the presence and type of branches.",
          "es": "El esqueleto de carbonos es distinto, variando la longitud de la cadena principal o la presencia y tipo de ramificaciones."
        },
        "isomers": [
          {
            "id": "n-butane",
            "carbons": 4,
            "name": {
              "gl": "n-Butano",
              "en": "n-Butane",
              "es": "n-Butano"
            },
            "iupac": "Butane",
            "formula": "C\u2084H\u2081\u2080",
            "smiles": "CCCC",
            "cas": "106-97-8",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  -0.563,
                  0.516,
                  0.0071
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.563,
                  -0.5159,
                  0.0071
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.9293,
                  -0.1506,
                  -0.0071
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.9294,
                  0.1505,
                  -0.0071
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.4724,
                  1.1666,
                  -0.8706
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.4825,
                  1.1551,
                  0.894
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.4825,
                  -1.1551,
                  0.894
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.4723,
                  -1.1665,
                  -0.8706
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.0542,
                  -0.771,
                  -0.9003
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.0651,
                  -0.7856,
                  0.8742
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.7203,
                  0.606,
                  -0.0058
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.0542,
                  0.7709,
                  -0.9003
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.7202,
                  -0.6062,
                  -0.0059
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.0652,
                  0.7854,
                  0.8743
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 2
              },
              {
                "start": 0,
                "end": 4
              },
              {
                "start": 0,
                "end": 5
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 6
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 2,
                "end": 8
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 3,
                "end": 11
              },
              {
                "start": 3,
                "end": 12
              },
              {
                "start": 3,
                "end": 13
              }
            ]
          },
          {
            "id": "isobutane",
            "carbons": 4,
            "name": {
              "gl": "Isobutano",
              "en": "Isobutane",
              "es": "Isobutano"
            },
            "iupac": "2-methylpropane",
            "formula": "C\u2084H\u2081\u2080",
            "smiles": "CC(C)C",
            "cas": "75-28-5",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  0.0,
                  0.0,
                  -0.3603
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.5345,
                  1.3473,
                  0.1201
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.4342,
                  -0.2109,
                  0.1201
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.8997,
                  -1.1365,
                  0.1201
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0,
                  0.0,
                  -1.4571
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.5557,
                  1.4007,
                  1.2139
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0922,
                  2.1671,
                  -0.2469
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.5526,
                  1.5147,
                  -0.2469
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.491,
                  -0.2192,
                  1.214
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.0882,
                  0.5872,
                  -0.2468
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.8308,
                  -1.1634,
                  -0.2469
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.9354,
                  -1.1816,
                  1.2139
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.5355,
                  -2.102,
                  -0.2469
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.923,
                  -1.0036,
                  -0.2469
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 2
              },
              {
                "start": 0,
                "end": 3
              },
              {
                "start": 0,
                "end": 4
              },
              {
                "start": 1,
                "end": 5
              },
              {
                "start": 1,
                "end": 6
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 2,
                "end": 8
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 3,
                "end": 11
              },
              {
                "start": 3,
                "end": 12
              },
              {
                "start": 3,
                "end": 13
              }
            ]
          },
          {
            "id": "n-pentane",
            "carbons": 5,
            "name": {
              "gl": "n-Pentano",
              "en": "n-Pentane",
              "es": "n-Pentano"
            },
            "iupac": "Pentane",
            "formula": "C\u2085H\u2081\u2082",
            "smiles": "CCCCC",
            "cas": "109-66-0",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  0.0,
                  0.3478,
                  -0.0228
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.2621,
                  -0.514,
                  -0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.2621,
                  -0.514,
                  -0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.5198,
                  0.3401,
                  0.0115
                ]
              },
              {
                "element": "C",
                "pos": [
                  -2.5199,
                  0.3401,
                  0.0115
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0,
                  0.9783,
                  -0.9202
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0,
                  1.0201,
                  0.8439
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.28,
                  -1.171,
                  -0.8775
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2583,
                  -1.1576,
                  0.8874
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.2799,
                  -1.171,
                  -0.8774
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.2582,
                  -1.1576,
                  0.8873
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.5484,
                  0.9847,
                  0.8958
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.5708,
                  0.9752,
                  -0.8788
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.4101,
                  -0.2964,
                  0.0264
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.5484,
                  0.9848,
                  0.8958
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.4101,
                  -0.2964,
                  0.0263
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.5709,
                  0.975,
                  -0.8787
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 2
              },
              {
                "start": 0,
                "end": 5
              },
              {
                "start": 0,
                "end": 6
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 1,
                "end": 8
              },
              {
                "start": 2,
                "end": 4
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 3,
                "end": 11
              },
              {
                "start": 3,
                "end": 12
              },
              {
                "start": 3,
                "end": 13
              },
              {
                "start": 4,
                "end": 14
              },
              {
                "start": 4,
                "end": 15
              },
              {
                "start": 4,
                "end": 16
              }
            ]
          },
          {
            "id": "isopentane",
            "carbons": 5,
            "name": {
              "gl": "Isopentano",
              "en": "Isopentane",
              "es": "Isopentano"
            },
            "iupac": "2-methylbutane",
            "formula": "C\u2085H\u2081\u2082",
            "smiles": "CC(C)CC",
            "cas": "78-78-4",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  -0.5979,
                  -0.0054,
                  0.4642
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.9206,
                  -0.0612,
                  0.7063
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.0244,
                  1.2664,
                  -0.2702
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.0428,
                  -1.2354,
                  -0.3304
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.7445,
                  0.0356,
                  -0.5698
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.0951,
                  -0.0263,
                  1.4419
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.177,
                  -0.9894,
                  1.2312
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2069,
                  0.7627,
                  1.3714
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.667,
                  1.2892,
                  -1.3045
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.6496,
                  2.1572,
                  0.2444
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.1173,
                  1.3365,
                  -0.3023
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.6713,
                  -1.2245,
                  -1.3598
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.1367,
                  -1.2756,
                  -0.3814
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.702,
                  -2.1588,
                  0.1496
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.8099,
                  -0.0176,
                  -0.3204
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.5844,
                  0.9839,
                  -1.0905
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.5342,
                  -0.7855,
                  -1.2602
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 2
              },
              {
                "start": 0,
                "end": 3
              },
              {
                "start": 0,
                "end": 5
              },
              {
                "start": 1,
                "end": 4
              },
              {
                "start": 1,
                "end": 6
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 2,
                "end": 8
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 3,
                "end": 11
              },
              {
                "start": 3,
                "end": 12
              },
              {
                "start": 3,
                "end": 13
              },
              {
                "start": 4,
                "end": 14
              },
              {
                "start": 4,
                "end": 15
              },
              {
                "start": 4,
                "end": 16
              }
            ]
          },
          {
            "id": "neopentane",
            "carbons": 5,
            "name": {
              "gl": "Neopentano",
              "en": "Neopentane",
              "es": "Neopentano"
            },
            "iupac": "2,2-dimethylpropane",
            "formula": "C\u2085H\u2081\u2082",
            "smiles": "CC(C)(C)C",
            "cas": "463-82-1",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  0.0,
                  0.0,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.3467,
                  0.3727,
                  0.6364
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.8961,
                  1.2449,
                  -0.0677
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.2359,
                  -0.5385,
                  -1.4183
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.6864,
                  -1.0791,
                  0.8496
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.2106,
                  0.7613,
                  1.652
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.8616,
                  1.1428,
                  0.051
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.0095,
                  -0.4977,
                  0.6985
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.8669,
                  1.01,
                  -0.5184
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.0828,
                  1.6532,
                  0.9319
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.4318,
                  2.0348,
                  -0.6688
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.8737,
                  -1.4294,
                  -1.4026
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.7257,
                  0.2109,
                  -2.0501
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.7093,
                  -0.8138,
                  -1.8996
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.8684,
                  -0.7234,
                  1.8699
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.6524,
                  -1.3666,
                  0.4196
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0693,
                  -1.9822,
                  0.9165
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 2
              },
              {
                "start": 0,
                "end": 3
              },
              {
                "start": 0,
                "end": 4
              },
              {
                "start": 1,
                "end": 5
              },
              {
                "start": 1,
                "end": 6
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 2,
                "end": 8
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 3,
                "end": 11
              },
              {
                "start": 3,
                "end": 12
              },
              {
                "start": 3,
                "end": 13
              },
              {
                "start": 4,
                "end": 14
              },
              {
                "start": 4,
                "end": 15
              },
              {
                "start": 4,
                "end": 16
              }
            ]
          },
          {
            "id": "n-hexane",
            "carbons": 6,
            "name": {
              "gl": "n-Hexano",
              "en": "n-Hexane",
              "es": "n-Hexano"
            },
            "iupac": "Hexane",
            "formula": "C\u2086H\u2081\u2084",
            "smiles": "CCCCCC",
            "cas": "110-54-3",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  0.6558,
                  0.3935,
                  0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.6558,
                  -0.3932,
                  0.0227
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.8649,
                  -0.5413,
                  -0.0114
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.865,
                  0.5414,
                  0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  3.1709,
                  0.2369,
                  -0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  -3.1709,
                  -0.2372,
                  -0.0115
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.684,
                  1.0388,
                  -0.8865
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.7045,
                  1.0489,
                  0.8783
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.693,
                  -1.0225,
                  0.9203
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.6952,
                  -1.0642,
                  -0.8441
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.8337,
                  -1.2015,
                  0.8633
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.8334,
                  -1.1803,
                  -0.9015
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.8442,
                  1.1983,
                  0.8775
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.8234,
                  1.1837,
                  -0.8874
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.2485,
                  0.8856,
                  -0.8784
                ]
              },
              {
                "element": "H",
                "pos": [
                  4.0222,
                  -0.451,
                  -0.0096
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.2483,
                  0.8607,
                  0.8961
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.2373,
                  -0.8791,
                  -0.8958
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.2592,
                  -0.8681,
                  0.8788
                ]
              },
              {
                "element": "H",
                "pos": [
                  -4.0221,
                  0.4505,
                  -0.0263
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 2
              },
              {
                "start": 0,
                "end": 6
              },
              {
                "start": 0,
                "end": 7
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 8
              },
              {
                "start": 1,
                "end": 9
              },
              {
                "start": 2,
                "end": 4
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 2,
                "end": 11
              },
              {
                "start": 3,
                "end": 5
              },
              {
                "start": 3,
                "end": 12
              },
              {
                "start": 3,
                "end": 13
              },
              {
                "start": 4,
                "end": 14
              },
              {
                "start": 4,
                "end": 15
              },
              {
                "start": 4,
                "end": 16
              },
              {
                "start": 5,
                "end": 17
              },
              {
                "start": 5,
                "end": 18
              },
              {
                "start": 5,
                "end": 19
              }
            ]
          },
          {
            "id": "2-methylpentane",
            "carbons": 6,
            "name": {
              "gl": "2-Metilpentano",
              "en": "2-Methylpentane",
              "es": "2-Metilpentano"
            },
            "iupac": "2-methylpentane",
            "formula": "C\u2086H\u2081\u2084",
            "smiles": "CCCC(C)C",
            "cas": "107-83-5",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  3.2921,
                  -1.0196,
                  0.3131
                ]
              },
              {
                "element": "O",
                "pos": [
                  3.6608,
                  1.0013,
                  -0.7523
                ]
              },
              {
                "element": "C",
                "pos": [
                  -3.4295,
                  0.2942,
                  0.1697
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.9458,
                  -0.0367,
                  -0.025
                ]
              },
              {
                "element": "C",
                "pos": [
                  -4.3217,
                  -0.8202,
                  -0.3785
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.0175,
                  1.0414,
                  0.537
                ]
              },
              {
                "element": "C",
                "pos": [
                  -5.7947,
                  -0.5119,
                  -0.1622
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.3989,
                  0.7436,
                  0.2839
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.5565,
                  0.4992,
                  0.0784
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.9429,
                  0.2025,
                  -0.1696
                ]
              },
              {
                "element": "C",
                "pos": [
                  4.6579,
                  -1.3939,
                  0.1054
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.6645,
                  1.2388,
                  -0.3353
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.6337,
                  0.4379,
                  1.2376
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.7191,
                  -0.9972,
                  0.4559
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.7447,
                  -0.1708,
                  -1.096
                ]
              },
              {
                "element": "H",
                "pos": [
                  -4.1345,
                  -0.9535,
                  -1.4503
                ]
              },
              {
                "element": "H",
                "pos": [
                  -4.0783,
                  -1.7689,
                  0.114
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.1827,
                  1.1406,
                  1.6162
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.267,
                  2.0098,
                  0.0873
                ]
              },
              {
                "element": "H",
                "pos": [
                  -6.0212,
                  -0.4062,
                  0.9036
                ]
              },
              {
                "element": "H",
                "pos": [
                  -6.414,
                  -1.3207,
                  -0.5626
                ]
              },
              {
                "element": "H",
                "pos": [
                  -6.0794,
                  0.4163,
                  -0.6679
                ]
              },
              {
                "element": "H",
                "pos": [
                  5.3249,
                  -0.6884,
                  0.61
                ]
              },
              {
                "element": "H",
                "pos": [
                  4.88,
                  -1.4377,
                  -0.9652
                ]
              },
              {
                "element": "H",
                "pos": [
                  4.8075,
                  -2.3877,
                  0.5359
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 9
              },
              {
                "start": 0,
                "end": 10
              },
              {
                "start": 1,
                "end": 9,
                "type": 2
              },
              {
                "start": 2,
                "end": 3
              },
              {
                "start": 2,
                "end": 4
              },
              {
                "start": 2,
                "end": 11
              },
              {
                "start": 2,
                "end": 12
              },
              {
                "start": 3,
                "end": 5
              },
              {
                "start": 3,
                "end": 13
              },
              {
                "start": 3,
                "end": 14
              },
              {
                "start": 4,
                "end": 6
              },
              {
                "start": 4,
                "end": 15
              },
              {
                "start": 4,
                "end": 16
              },
              {
                "start": 5,
                "end": 7
              },
              {
                "start": 5,
                "end": 17
              },
              {
                "start": 5,
                "end": 18
              },
              {
                "start": 6,
                "end": 19
              },
              {
                "start": 6,
                "end": 20
              },
              {
                "start": 6,
                "end": 21
              },
              {
                "start": 7,
                "end": 8,
                "type": 3
              },
              {
                "start": 8,
                "end": 9
              },
              {
                "start": 10,
                "end": 22
              },
              {
                "start": 10,
                "end": 23
              },
              {
                "start": 10,
                "end": 24
              }
            ]
          },
          {
            "id": "3-methylpentane",
            "carbons": 6,
            "name": {
              "gl": "3-Metilpentano",
              "en": "3-Methylpentane",
              "es": "3-Metilpentano"
            },
            "iupac": "3-methylpentane",
            "formula": "C\u2086H\u2081\u2084",
            "smiles": "CCC(C)CC",
            "cas": "96-14-0",
            "atoms": [
              {
                "element": "N",
                "pos": [
                  3.7387,
                  -0.3623,
                  -0.0108
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.0008,
                  0.4681,
                  0.0158
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.2706,
                  -0.3837,
                  0.0171
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.289,
                  -0.3605,
                  -0.0129
                ]
              },
              {
                "element": "C",
                "pos": [
                  -2.5235,
                  0.4923,
                  -0.0273
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.5567,
                  0.4928,
                  0.0123
                ]
              },
              {
                "element": "C",
                "pos": [
                  -3.7912,
                  -0.3466,
                  0.0057
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0055,
                  1.1098,
                  0.9057
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.0104,
                  1.1351,
                  -0.8552
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.2627,
                  -1.0565,
                  -0.8489
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.2876,
                  -1.0126,
                  0.9153
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2862,
                  -0.9886,
                  -0.9132
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2894,
                  -1.0421,
                  0.8477
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.5191,
                  1.1031,
                  -0.9375
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.5269,
                  1.1807,
                  0.8258
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.5808,
                  1.1643,
                  -0.8524
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.5798,
                  1.1142,
                  0.9136
                ]
              },
              {
                "element": "H",
                "pos": [
                  -4.6741,
                  0.2993,
                  -0.0277
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.8342,
                  -1.0258,
                  -0.8517
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.8421,
                  -0.9446,
                  0.9212
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.7177,
                  -0.9532,
                  -0.8412
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.7167,
                  -0.9986,
                  0.7855
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 5
              },
              {
                "start": 0,
                "end": 20
              },
              {
                "start": 0,
                "end": 21
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 1,
                "end": 8
              },
              {
                "start": 2,
                "end": 4
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 3,
                "end": 5
              },
              {
                "start": 3,
                "end": 11
              },
              {
                "start": 3,
                "end": 12
              },
              {
                "start": 4,
                "end": 6
              },
              {
                "start": 4,
                "end": 13
              },
              {
                "start": 4,
                "end": 14
              },
              {
                "start": 5,
                "end": 15
              },
              {
                "start": 5,
                "end": 16
              },
              {
                "start": 6,
                "end": 17
              },
              {
                "start": 6,
                "end": 18
              },
              {
                "start": 6,
                "end": 19
              }
            ]
          }
        ]
      },
      {
        "id": "estructural-posicion",
        "title": {
          "gl": "Isomer\u00eda de Posici\u00f3n",
          "en": "Position Isomerism",
          "es": "Isomer\u00eda de Posici\u00f3n"
        },
        "description": {
          "gl": "O grupo funcional, o dobre enlace ou o triple enlace sit\u00faase nunha posici\u00f3n distinta dentro da mesma cadea de carbonos.",
          "en": "The functional group, double bond or triple bond is located in a different position within the same carbon chain.",
          "es": "El grupo funcional, el doble enlace o el triple enlace se sit\u00faa en una posici\u00f3n distinta dentro de la misma cadena carbonada."
        },
        "isomers": [
          {
            "id": "1-propanol",
            "carbons": 3,
            "name": {
              "gl": "1-Propanol",
              "en": "1-Propanol",
              "es": "1-Propanol"
            },
            "iupac": "Propan-1-ol",
            "formula": "C\u2083H\u2088O",
            "smiles": "CCCO",
            "cas": "71-23-8",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  1.8381,
                  -0.1603,
                  -0.0038
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.53,
                  -0.5081,
                  0.0038
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.5908,
                  0.52,
                  0.0036
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.8989,
                  0.1484,
                  -0.0036
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.4276,
                  -1.1648,
                  -0.8685
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.4365,
                  -1.1579,
                  0.8822
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.5433,
                  1.153,
                  -0.8878
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.5477,
                  1.1632,
                  0.8882
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.03,
                  0.7717,
                  -0.8939
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.6851,
                  -0.613,
                  -0.0032
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.036,
                  0.7789,
                  0.8808
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.8848,
                  -0.6971,
                  0.8057
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 2
              },
              {
                "start": 0,
                "end": 11
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 4
              },
              {
                "start": 1,
                "end": 5
              },
              {
                "start": 2,
                "end": 6
              },
              {
                "start": 2,
                "end": 7
              },
              {
                "start": 3,
                "end": 8
              },
              {
                "start": 3,
                "end": 9
              },
              {
                "start": 3,
                "end": 10
              }
            ]
          },
          {
            "id": "2-propanol",
            "carbons": 3,
            "name": {
              "gl": "2-Propanol",
              "en": "2-Propanol",
              "es": "2-Propanol"
            },
            "iupac": "Propan-2-ol",
            "formula": "C\u2083H\u2088O",
            "smiles": "CC(C)O",
            "cas": "67-63-0",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  -0.0004,
                  1.3572,
                  -0.1242
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.0,
                  0.0177,
                  0.3601
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.2599,
                  -0.6878,
                  -0.1179
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.2603,
                  -0.6871,
                  -0.1179
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.0001,
                  0.0646,
                  1.454
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.3079,
                  -1.7139,
                  0.259
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.1507,
                  -0.1484,
                  0.2213
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.3061,
                  -0.7138,
                  -1.2122
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.3089,
                  -1.7132,
                  0.259
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.1508,
                  -0.1471,
                  0.2213
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.3066,
                  -0.7131,
                  -1.2122
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.0006,
                  1.3242,
                  -1.0961
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 11
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 4
              },
              {
                "start": 2,
                "end": 5
              },
              {
                "start": 2,
                "end": 6
              },
              {
                "start": 2,
                "end": 7
              },
              {
                "start": 3,
                "end": 8
              },
              {
                "start": 3,
                "end": 9
              },
              {
                "start": 3,
                "end": 10
              }
            ]
          },
          {
            "id": "1-butanol",
            "carbons": 4,
            "name": {
              "gl": "1-Butanol",
              "en": "1-Butanol",
              "es": "1-Butanol"
            },
            "iupac": "Butan-1-ol",
            "formula": "C\u2084H\u2081\u2080O",
            "smiles": "CCCCO",
            "cas": "71-36-3",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  -2.4187,
                  0.3489,
                  -0.0069
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.0245,
                  0.3421,
                  0.0194
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.236,
                  -0.5181,
                  0.0058
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.2861,
                  -0.509,
                  -0.0059
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.4934,
                  0.3361,
                  -0.0125
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.0362,
                  0.9861,
                  0.9077
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.0261,
                  1.0212,
                  -0.8425
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2331,
                  -1.1695,
                  -0.8759
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2529,
                  -1.1673,
                  0.8889
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.3272,
                  -1.1426,
                  -0.8975
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.3449,
                  -1.1505,
                  0.8787
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.5228,
                  0.9724,
                  -0.9027
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.5432,
                  0.9795,
                  0.8718
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.3838,
                  -0.3002,
                  -0.0202
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.3753,
                  0.892,
                  -0.8123
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 3
              },
              {
                "start": 0,
                "end": 14
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 5
              },
              {
                "start": 1,
                "end": 6
              },
              {
                "start": 2,
                "end": 4
              },
              {
                "start": 2,
                "end": 7
              },
              {
                "start": 2,
                "end": 8
              },
              {
                "start": 3,
                "end": 9
              },
              {
                "start": 3,
                "end": 10
              },
              {
                "start": 4,
                "end": 11
              },
              {
                "start": 4,
                "end": 12
              },
              {
                "start": 4,
                "end": 13
              }
            ]
          },
          {
            "id": "2-butanol",
            "carbons": 4,
            "name": {
              "gl": "2-Butanol",
              "en": "2-Butanol",
              "es": "2-Butanol"
            },
            "iupac": "Butan-2-ol",
            "formula": "C\u2084H\u2081\u2080O",
            "smiles": "CCC(O)C",
            "cas": "78-92-2",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  0.689,
                  0.4498,
                  0.0
                ]
              },
              {
                "element": "O",
                "pos": [
                  -0.64,
                  -1.4234,
                  0.0
                ]
              },
              {
                "element": "N",
                "pos": [
                  -1.54,
                  0.7149,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.8535,
                  -0.3837,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  3.0875,
                  0.4933,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.5113,
                  -0.2036,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -2.9386,
                  0.3526,
                  0.0
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.8491,
                  -1.0166,
                  0.8943
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.8491,
                  -1.0165,
                  -0.8945
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.9978,
                  -0.1125,
                  0.0
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.0966,
                  1.1457,
                  -0.8794
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.0966,
                  1.1456,
                  0.8795
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.3012,
                  1.7018,
                  -0.0003
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.0689,
                  -0.7321,
                  0.0021
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.4016,
                  0.7805,
                  -0.8924
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.4025,
                  0.7841,
                  0.8903
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 3
              },
              {
                "start": 0,
                "end": 5
              },
              {
                "start": 1,
                "end": 5,
                "type": 2
              },
              {
                "start": 2,
                "end": 5
              },
              {
                "start": 2,
                "end": 6
              },
              {
                "start": 2,
                "end": 12
              },
              {
                "start": 3,
                "end": 4
              },
              {
                "start": 3,
                "end": 7
              },
              {
                "start": 3,
                "end": 8
              },
              {
                "start": 4,
                "end": 9
              },
              {
                "start": 4,
                "end": 10
              },
              {
                "start": 4,
                "end": 11
              },
              {
                "start": 6,
                "end": 13
              },
              {
                "start": 6,
                "end": 14
              },
              {
                "start": 6,
                "end": 15
              }
            ]
          },
          {
            "id": "1-pentanol",
            "carbons": 5,
            "name": {
              "gl": "1-Pentanol",
              "en": "1-Pentanol",
              "es": "1-Pentanol"
            },
            "iupac": "Pentan-1-ol",
            "formula": "C\u2085H\u2081\u2082O",
            "smiles": "CCCCCO",
            "cas": "71-41-0",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  3.0664,
                  0.247,
                  -0.0215
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.6349,
                  -0.3969,
                  0.0256
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.6762,
                  0.3859,
                  0.0188
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.8422,
                  0.5402,
                  0.003
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.8838,
                  -0.5404,
                  -0.0014
                ]
              },
              {
                "element": "C",
                "pos": [
                  -3.1493,
                  -0.2359,
                  -0.0246
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.679,
                  -1.0344,
                  0.9169
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.67,
                  -1.0597,
                  -0.8477
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.733,
                  1.0406,
                  0.8975
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.7134,
                  1.0511,
                  -0.8531
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.8261,
                  1.1891,
                  0.8863
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.7933,
                  1.1904,
                  -0.8782
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.8805,
                  -1.188,
                  -0.8839
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.9095,
                  -1.1718,
                  0.892
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.2109,
                  -0.8695,
                  -0.9151
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.2449,
                  -0.8746,
                  0.8593
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.9992,
                  0.4536,
                  -0.039
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.0506,
                  0.7804,
                  -0.8344
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 4
              },
              {
                "start": 0,
                "end": 17
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 6
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 2,
                "end": 4
              },
              {
                "start": 2,
                "end": 8
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 3,
                "end": 5
              },
              {
                "start": 3,
                "end": 10
              },
              {
                "start": 3,
                "end": 11
              },
              {
                "start": 4,
                "end": 12
              },
              {
                "start": 4,
                "end": 13
              },
              {
                "start": 5,
                "end": 14
              },
              {
                "start": 5,
                "end": 15
              },
              {
                "start": 5,
                "end": 16
              }
            ]
          },
          {
            "id": "2-pentanol",
            "carbons": 5,
            "name": {
              "gl": "2-Pentanol",
              "en": "2-Pentanol",
              "es": "2-Pentanol"
            },
            "iupac": "Pentan-2-ol",
            "formula": "C\u2085H\u2081\u2082O",
            "smiles": "CCCC(O)C",
            "cas": "6032-29-7",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  1.5754,
                  -1.3067,
                  -2.747
                ]
              },
              {
                "element": "N",
                "pos": [
                  -0.4036,
                  -0.6002,
                  -0.8419
                ]
              },
              {
                "element": "N",
                "pos": [
                  -3.9588,
                  -0.494,
                  0.2914
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.5075,
                  0.4027,
                  -1.3743
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.8365,
                  -0.2878,
                  -1.7764
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.7133,
                  -0.0192,
                  -0.5674
                ]
              },
              {
                "element": "C",
                "pos": [
                  -2.6513,
                  -1.0807,
                  -0.0004
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.6955,
                  1.5498,
                  -0.3955
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.5468,
                  -0.9534,
                  -0.6153
                ]
              },
              {
                "element": "C",
                "pos": [
                  -4.546,
                  0.0746,
                  -0.9213
                ]
              },
              {
                "element": "C",
                "pos": [
                  -4.8517,
                  -1.4977,
                  0.8696
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.6591,
                  1.2861,
                  0.9597
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.8982,
                  2.824,
                  -0.8883
                ]
              },
              {
                "element": "C",
                "pos": [
                  3.4616,
                  -0.2239,
                  0.1224
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.2631,
                  -2.2746,
                  -0.3199
                ]
              },
              {
                "element": "C",
                "pos": [
                  -5.878,
                  0.7427,
                  -0.6251
                ]
              },
              {
                "element": "C",
                "pos": [
                  -4.257,
                  -2.0996,
                  2.1315
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.8319,
                  2.3388,
                  1.8582
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.0712,
                  3.8766,
                  0.0104
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.038,
                  3.634,
                  1.3836
                ]
              },
              {
                "element": "C",
                "pos": [
                  4.1153,
                  -0.8365,
                  1.1915
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.9168,
                  -2.8871,
                  0.7494
                ]
              },
              {
                "element": "C",
                "pos": [
                  3.8429,
                  -2.1679,
                  1.5051
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0587,
                  0.7967,
                  -2.2979
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.5138,
                  0.4334,
                  -2.2511
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.0782,
                  0.3536,
                  -1.5289
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.6935,
                  0.8221,
                  0.1311
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.5008,
                  -1.3688,
                  -1.5051
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.174,
                  -1.4549,
                  0.912
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.7415,
                  -1.9237,
                  -0.6989
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.932,
                  0.8845,
                  -1.3226
                ]
              },
              {
                "element": "H",
                "pos": [
                  -4.6712,
                  -0.6756,
                  -1.712
                ]
              },
              {
                "element": "H",
                "pos": [
                  -5.7974,
                  -1.04,
                  1.1779
                ]
              },
              {
                "element": "H",
                "pos": [
                  -5.0874,
                  -2.2975,
                  0.1563
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.519,
                  0.289,
                  1.366
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.9278,
                  3.0208,
                  -1.9557
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.1373,
                  -0.8821,
                  -3.5042
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.6886,
                  0.8106,
                  -0.1179
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.5413,
                  -2.8584,
                  -0.8829
                ]
              },
              {
                "element": "H",
                "pos": [
                  -6.6815,
                  0.0186,
                  -0.4586
                ]
              },
              {
                "element": "H",
                "pos": [
                  -5.8146,
                  1.4101,
                  0.2414
                ]
              },
              {
                "element": "H",
                "pos": [
                  -6.1827,
                  1.3522,
                  -1.4837
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.4578,
                  -2.8162,
                  1.9182
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.8766,
                  -1.3293,
                  2.8113
                ]
              },
              {
                "element": "H",
                "pos": [
                  -5.0327,
                  -2.6543,
                  2.6719
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.8107,
                  2.1494,
                  2.9275
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2327,
                  4.8851,
                  -0.3591
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.174,
                  4.4535,
                  2.0833
                ]
              },
              {
                "element": "H",
                "pos": [
                  4.8375,
                  -0.277,
                  1.7789
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.7032,
                  -3.9232,
                  0.9953
                ]
              },
              {
                "element": "H",
                "pos": [
                  4.3516,
                  -2.6448,
                  2.3378
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 4
              },
              {
                "start": 0,
                "end": 36
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 5
              },
              {
                "start": 1,
                "end": 27
              },
              {
                "start": 2,
                "end": 6
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 3,
                "end": 4
              },
              {
                "start": 3,
                "end": 7
              },
              {
                "start": 3,
                "end": 23
              },
              {
                "start": 4,
                "end": 8
              },
              {
                "start": 4,
                "end": 24
              },
              {
                "start": 5,
                "end": 6
              },
              {
                "start": 5,
                "end": 25
              },
              {
                "start": 5,
                "end": 26
              },
              {
                "start": 6,
                "end": 28
              },
              {
                "start": 6,
                "end": 29
              },
              {
                "start": 7,
                "end": 11,
                "type": 2
              },
              {
                "start": 7,
                "end": 12
              },
              {
                "start": 8,
                "end": 13,
                "type": 2
              },
              {
                "start": 8,
                "end": 14
              },
              {
                "start": 9,
                "end": 15
              },
              {
                "start": 9,
                "end": 30
              },
              {
                "start": 9,
                "end": 31
              },
              {
                "start": 10,
                "end": 16
              },
              {
                "start": 10,
                "end": 32
              },
              {
                "start": 10,
                "end": 33
              },
              {
                "start": 11,
                "end": 17
              },
              {
                "start": 11,
                "end": 34
              },
              {
                "start": 12,
                "end": 18,
                "type": 2
              },
              {
                "start": 12,
                "end": 35
              },
              {
                "start": 13,
                "end": 20
              },
              {
                "start": 13,
                "end": 37
              },
              {
                "start": 14,
                "end": 21,
                "type": 2
              },
              {
                "start": 14,
                "end": 38
              },
              {
                "start": 15,
                "end": 39
              },
              {
                "start": 15,
                "end": 40
              },
              {
                "start": 15,
                "end": 41
              },
              {
                "start": 16,
                "end": 42
              },
              {
                "start": 16,
                "end": 43
              },
              {
                "start": 16,
                "end": 44
              },
              {
                "start": 17,
                "end": 19,
                "type": 2
              },
              {
                "start": 17,
                "end": 45
              },
              {
                "start": 18,
                "end": 19
              },
              {
                "start": 18,
                "end": 46
              },
              {
                "start": 19,
                "end": 47
              },
              {
                "start": 20,
                "end": 22,
                "type": 2
              },
              {
                "start": 20,
                "end": 48
              },
              {
                "start": 21,
                "end": 22
              },
              {
                "start": 21,
                "end": 49
              },
              {
                "start": 22,
                "end": 50
              }
            ]
          },
          {
            "id": "1-hexanol",
            "carbons": 6,
            "name": {
              "gl": "1-Hexanol",
              "en": "1-Hexanol",
              "es": "1-Hexanol"
            },
            "iupac": "Hexan-1-ol",
            "formula": "C\u2086H\u2081\u2084O",
            "smiles": "CCCCCCO",
            "cas": "111-27-3",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  3.6923,
                  0.3597,
                  0.0018
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.0287,
                  -0.4733,
                  0.0029
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.2601,
                  0.3536,
                  0.0158
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.2971,
                  0.3784,
                  0.0175
                ]
              },
              {
                "element": "C",
                "pos": [
                  -2.5294,
                  -0.4992,
                  0.026
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.5505,
                  -0.4855,
                  -0.0293
                ]
              },
              {
                "element": "C",
                "pos": [
                  -3.779,
                  0.3663,
                  -0.0347
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0323,
                  -1.113,
                  -0.8884
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0335,
                  -1.1422,
                  0.8724
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.2587,
                  1.0084,
                  0.8961
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.27,
                  1.008,
                  -0.8647
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.3159,
                  1.0081,
                  0.9156
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2995,
                  1.0698,
                  -0.8341
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.5241,
                  -1.1828,
                  -0.8308
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.5558,
                  -1.1144,
                  0.9327
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.5996,
                  -1.1703,
                  0.8232
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.5875,
                  -1.0748,
                  -0.9505
                ]
              },
              {
                "element": "H",
                "pos": [
                  -4.6754,
                  -0.2616,
                  -0.024
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.8285,
                  1.0442,
                  0.8234
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.7964,
                  0.9673,
                  -0.9495
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.6676,
                  0.8564,
                  0.8374
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 5
              },
              {
                "start": 0,
                "end": 20
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 1,
                "end": 8
              },
              {
                "start": 2,
                "end": 4
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 3,
                "end": 5
              },
              {
                "start": 3,
                "end": 11
              },
              {
                "start": 3,
                "end": 12
              },
              {
                "start": 4,
                "end": 6
              },
              {
                "start": 4,
                "end": 13
              },
              {
                "start": 4,
                "end": 14
              },
              {
                "start": 5,
                "end": 15
              },
              {
                "start": 5,
                "end": 16
              },
              {
                "start": 6,
                "end": 17
              },
              {
                "start": 6,
                "end": 18
              },
              {
                "start": 6,
                "end": 19
              }
            ]
          },
          {
            "id": "2-hexanol",
            "carbons": 6,
            "name": {
              "gl": "2-Hexanol",
              "en": "2-Hexanol",
              "es": "2-Hexanol"
            },
            "iupac": "Hexan-2-ol",
            "formula": "C\u2086H\u2081\u2084O",
            "smiles": "CCCCC(O)C",
            "cas": "626-93-7",
            "atoms": [
              {
                "element": "N",
                "pos": [
                  -3.1918,
                  -0.0003,
                  0.281
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.9692,
                  0.0001,
                  -0.2914
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.4467,
                  0.0002,
                  -0.4936
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.2784,
                  -1.2079,
                  -0.1964
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.2782,
                  1.2081,
                  -0.1962
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.7946,
                  -0.0001,
                  0.0889
                ]
              },
              {
                "element": "C",
                "pos": [
                  3.221,
                  -0.0003,
                  0.8202
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.1034,
                  -1.208,
                  -0.0064
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.1037,
                  1.2081,
                  -0.0061
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.7416,
                  -0.8731,
                  -1.0889
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.7416,
                  0.8742,
                  -1.0881
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.8056,
                  -2.1558,
                  -0.2669
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.8052,
                  2.156,
                  -0.2666
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.9837,
                  0.8849,
                  1.4199
                ]
              },
              {
                "element": "H",
                "pos": [
                  4.2979,
                  -0.0003,
                  0.6246
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.9838,
                  -0.8861,
                  1.4192
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.6303,
                  -2.1559,
                  0.0666
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.6308,
                  2.156,
                  0.0671
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.6933,
                  0.8751,
                  0.3507
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.693,
                  -0.8759,
                  0.3505
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 5
              },
              {
                "start": 0,
                "end": 18
              },
              {
                "start": 0,
                "end": 19
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 1,
                "end": 3,
                "type": 2
              },
              {
                "start": 1,
                "end": 4
              },
              {
                "start": 2,
                "end": 6
              },
              {
                "start": 2,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 3,
                "end": 7
              },
              {
                "start": 3,
                "end": 11
              },
              {
                "start": 4,
                "end": 8,
                "type": 2
              },
              {
                "start": 4,
                "end": 12
              },
              {
                "start": 5,
                "end": 7,
                "type": 2
              },
              {
                "start": 5,
                "end": 8
              },
              {
                "start": 6,
                "end": 13
              },
              {
                "start": 6,
                "end": 14
              },
              {
                "start": 6,
                "end": 15
              },
              {
                "start": 7,
                "end": 16
              },
              {
                "start": 8,
                "end": 17
              }
            ]
          },
          {
            "id": "o-xylene",
            "carbons": 8,
            "name": {
              "gl": "o-Xileno",
              "en": "o-Xylene",
              "es": "o-Xileno"
            },
            "iupac": "1,2-dimethylbenzene",
            "formula": "C\u2088H\u2081\u2080",
            "smiles": "CC1=CC=CC=C1C",
            "cas": "95-47-6",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  0.5857,
                  0.6975,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.5859,
                  -0.6974,
                  0.0003
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.6224,
                  1.3948,
                  -0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.622,
                  -1.3949,
                  0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.8664,
                  1.4659,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.8667,
                  -1.4656,
                  -0.0002
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.8303,
                  0.6973,
                  -0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.8301,
                  -0.6976,
                  -0.0001
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.6407,
                  2.4815,
                  -0.0002
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.6402,
                  -2.4816,
                  -0.0001
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.4545,
                  1.2356,
                  0.8944
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.4555,
                  1.2339,
                  -0.8932
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.6907,
                  2.5473,
                  -0.0012
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.4564,
                  -1.2331,
                  0.8925
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.6911,
                  -2.547,
                  0.0017
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.4541,
                  -1.2356,
                  -0.8951
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.7711,
                  1.24,
                  -0.0001
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.7707,
                  -1.2405,
                  -0.0002
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 2,
                "type": 2
              },
              {
                "start": 0,
                "end": 4
              },
              {
                "start": 1,
                "end": 3,
                "type": 2
              },
              {
                "start": 1,
                "end": 5
              },
              {
                "start": 2,
                "end": 6
              },
              {
                "start": 2,
                "end": 8
              },
              {
                "start": 3,
                "end": 7
              },
              {
                "start": 3,
                "end": 9
              },
              {
                "start": 4,
                "end": 10
              },
              {
                "start": 4,
                "end": 11
              },
              {
                "start": 4,
                "end": 12
              },
              {
                "start": 5,
                "end": 13
              },
              {
                "start": 5,
                "end": 14
              },
              {
                "start": 5,
                "end": 15
              },
              {
                "start": 6,
                "end": 7,
                "type": 2
              },
              {
                "start": 6,
                "end": 16
              },
              {
                "start": 7,
                "end": 17
              }
            ]
          },
          {
            "id": "m-xylene",
            "carbons": 8,
            "name": {
              "gl": "m-Xileno",
              "en": "m-Xylene",
              "es": "m-Xileno"
            },
            "iupac": "1,3-dimethylbenzene",
            "formula": "C\u2088H\u2081\u2080",
            "smiles": "CC1=CC(C)=CC=C1",
            "cas": "108-38-3",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  -1.2079,
                  -0.3369,
                  0.0004
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.2081,
                  -0.3365,
                  -0.0006
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.0003,
                  -1.0341,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.2082,
                  1.058,
                  0.0004
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.2079,
                  1.0583,
                  -0.0004
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.0003,
                  1.7555,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -2.4997,
                  -1.0822,
                  -0.0004
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.4998,
                  -1.082,
                  0.0005
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.0004,
                  -2.1217,
                  0.0037
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.1426,
                  1.6128,
                  0.0025
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.1422,
                  1.6135,
                  0.0016
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.0004,
                  2.8417,
                  0.0011
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.2905,
                  -0.5045,
                  -0.491
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.8097,
                  -1.2975,
                  1.027
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.4088,
                  -2.0276,
                  -0.5459
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.4107,
                  -2.0252,
                  -0.5492
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.2925,
                  -0.5025,
                  -0.4849
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.8061,
                  -1.3014,
                  1.0282
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 2,
                "type": 2
              },
              {
                "start": 0,
                "end": 3
              },
              {
                "start": 0,
                "end": 6
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 1,
                "end": 4,
                "type": 2
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 2,
                "end": 8
              },
              {
                "start": 3,
                "end": 5,
                "type": 2
              },
              {
                "start": 3,
                "end": 9
              },
              {
                "start": 4,
                "end": 5
              },
              {
                "start": 4,
                "end": 10
              },
              {
                "start": 5,
                "end": 11
              },
              {
                "start": 6,
                "end": 12
              },
              {
                "start": 6,
                "end": 13
              },
              {
                "start": 6,
                "end": 14
              },
              {
                "start": 7,
                "end": 15
              },
              {
                "start": 7,
                "end": 16
              },
              {
                "start": 7,
                "end": 17
              }
            ]
          },
          {
            "id": "p-xylene",
            "carbons": 8,
            "name": {
              "gl": "p-Xileno",
              "en": "p-Xylene",
              "es": "p-Xileno"
            },
            "iupac": "1,4-dimethylbenzene",
            "formula": "C\u2088H\u2081\u2080",
            "smiles": "CC1=CC=C(C)C=C1",
            "cas": "106-42-3",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  1.3949,
                  0.0,
                  0.0002
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.3949,
                  0.0,
                  0.0002
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.6974,
                  1.2079,
                  0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.6975,
                  1.208,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.6974,
                  -1.2079,
                  0.0001
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.6975,
                  -1.2079,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.8862,
                  0.0,
                  -0.0003
                ]
              },
              {
                "element": "C",
                "pos": [
                  -2.8862,
                  0.0,
                  -0.0003
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2295,
                  2.1556,
                  0.0015
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.2296,
                  2.1556,
                  -0.0016
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2295,
                  -2.1556,
                  0.0015
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.2295,
                  -2.1556,
                  -0.0016
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.2812,
                  -0.8801,
                  -0.5191
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.2813,
                  0.8808,
                  -0.518
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.2621,
                  -0.0006,
                  1.0276
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.2815,
                  -0.8803,
                  0.5179
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.2816,
                  0.8805,
                  0.5174
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.2614,
                  -0.0003,
                  -1.0285
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 2,
                "type": 2
              },
              {
                "start": 0,
                "end": 4
              },
              {
                "start": 0,
                "end": 6
              },
              {
                "start": 1,
                "end": 3,
                "type": 2
              },
              {
                "start": 1,
                "end": 5
              },
              {
                "start": 1,
                "end": 7
              },
              {
                "start": 2,
                "end": 3
              },
              {
                "start": 2,
                "end": 8
              },
              {
                "start": 3,
                "end": 9
              },
              {
                "start": 4,
                "end": 5,
                "type": 2
              },
              {
                "start": 4,
                "end": 10
              },
              {
                "start": 5,
                "end": 11
              },
              {
                "start": 6,
                "end": 12
              },
              {
                "start": 6,
                "end": 13
              },
              {
                "start": 6,
                "end": 14
              },
              {
                "start": 7,
                "end": 15
              },
              {
                "start": 7,
                "end": 16
              },
              {
                "start": 7,
                "end": 17
              }
            ]
          }
        ]
      },
      {
        "id": "estructural-funcion",
        "title": {
          "gl": "Isomer\u00eda de Funci\u00f3n",
          "en": "Functional Isomerism",
          "es": "Isomer\u00eda de Funci\u00f3n"
        },
        "description": {
          "gl": "Os compostos presentan distintos grupos funcionais, polo que pertencen a familias qu\u00edmicas diferentes, a pesar de ter a mesma f\u00f3rmula molecular.",
          "en": "Compounds have different functional groups, so they belong to different chemical families, despite having the same molecular formula.",
          "es": "Los compuestos presentan distintos grupos funcionales, por lo que pertenecen a familias qu\u00edmicas diferentes, a pesar de tener la misma f\u00f3rmula molecular."
        },
        "isomers": [
          {
            "id": "ethanol",
            "carbons": 2,
            "name": {
              "gl": "Etanol",
              "en": "Ethanol",
              "es": "Etanol"
            },
            "iupac": "Ethanol",
            "formula": "C\u2082H\u2086O",
            "smiles": "CCO",
            "cas": "64-17-5",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  -1.1712,
                  0.2997,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.0463,
                  -0.5665,
                  0.0
                ]
              },
              {
                "element": "C",
                "pos": [
                  1.2175,
                  0.2668,
                  0.0
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.0958,
                  -1.212,
                  0.8819
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.0952,
                  -1.1938,
                  -0.8946
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.105,
                  -0.372,
                  -0.0177
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2426,
                  0.9307,
                  -0.8704
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.2616,
                  0.9052,
                  0.8886
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.1291,
                  0.8364,
                  0.8099
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 8
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 1,
                "end": 3
              },
              {
                "start": 1,
                "end": 4
              },
              {
                "start": 2,
                "end": 5
              },
              {
                "start": 2,
                "end": 6
              },
              {
                "start": 2,
                "end": 7
              }
            ]
          },
          {
            "id": "dimethyl-ether",
            "carbons": 2,
            "name": {
              "gl": "Dimetil \u00e9ter",
              "en": "Dimethyl ether",
              "es": "Dimetil \u00e9ter"
            },
            "iupac": "Methoxymethane",
            "formula": "C\u2082H\u2086O",
            "smiles": "COC",
            "cas": "115-10-6",
            "atoms": [
              {
                "element": "O",
                "pos": [
                  0.8505,
                  -0.5181,
                  -0.0003
                ]
              },
              {
                "element": "O",
                "pos": [
                  -2.6608,
                  0.4499,
                  0.014
                ]
              },
              {
                "element": "O",
                "pos": [
                  2.2982,
                  1.2821,
                  -0.0033
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.2681,
                  0.3746,
                  -0.0038
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.549,
                  -0.4374,
                  -0.0032
                ]
              },
              {
                "element": "C",
                "pos": [
                  2.0763,
                  0.0789,
                  -0.0004
                ]
              },
              {
                "element": "C",
                "pos": [
                  -3.8923,
                  -0.2585,
                  -0.007
                ]
              },
              {
                "element": "C",
                "pos": [
                  3.1453,
                  -0.9716,
                  0.004
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.2334,
                  1.0193,
                  0.8828
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.232,
                  1.0159,
                  -0.8927
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.5763,
                  -1.0927,
                  0.8758
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.5864,
                  -1.0751,
                  -0.8948
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.9796,
                  -0.9024,
                  0.8735
                ]
              },
              {
                "element": "H",
                "pos": [
                  -3.9761,
                  -0.8551,
                  -0.9205
                ]
              },
              {
                "element": "H",
                "pos": [
                  -4.7082,
                  0.4689,
                  0.0105
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.0606,
                  -1.5907,
                  -0.8926
                ]
              },
              {
                "element": "H",
                "pos": [
                  3.0595,
                  -1.5842,
                  0.905
                ]
              },
              {
                "element": "H",
                "pos": [
                  4.1272,
                  -0.4897,
                  0.0028
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 3
              },
              {
                "start": 0,
                "end": 5
              },
              {
                "start": 1,
                "end": 4
              },
              {
                "start": 1,
                "end": 6
              },
              {
                "start": 2,
                "end": 5,
                "type": 2
              },
              {
                "start": 3,
                "end": 4
              },
              {
                "start": 3,
                "end": 8
              },
              {
                "start": 3,
                "end": 9
              },
              {
                "start": 4,
                "end": 10
              },
              {
                "start": 4,
                "end": 11
              },
              {
                "start": 5,
                "end": 7
              },
              {
                "start": 6,
                "end": 12
              },
              {
                "start": 6,
                "end": 13
              },
              {
                "start": 6,
                "end": 14
              },
              {
                "start": 7,
                "end": 15
              },
              {
                "start": 7,
                "end": 16
              },
              {
                "start": 7,
                "end": 17
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "estereoisomeria",
    "title": {
      "gl": "2. Estereoisomer\u00eda",
      "en": "2. Stereoisomerism",
      "es": "2. Estereoisomer\u00eda"
    },
    "description": {
      "gl": "Aqu\u00ed, os \u00e1tomos te\u00f1en a mesma conectividade, pero difiren exclusivamente en como se orientan tridimensionalmente no espazo.",
      "en": "Here, atoms have the same connectivity, but differ exclusively in how they are oriented three-dimensionally in space.",
      "es": "Aqu\u00ed, los \u00e1tomos tienen la misma conectividad (est\u00e1n unidos en el mismo orden), pero difieren exclusivamente en c\u00f3mo se orientan tridimensionalmente en el espacio."
    },
    "subtypes": [
      {
        "id": "estereoisomeria-conformacional",
        "title": {
          "gl": "A. Isomer\u00eda Conformacional",
          "en": "A. Conformational Isomerism",
          "es": "A. Isomer\u00eda Conformacional"
        },
        "description": {
          "gl": "Son distintas disposici\u00f3ns espaciais que se poden interconverter simplemente pola rotaci\u00f3n libre ao redor de enlaces simples (sigma).",
          "en": "They are different spatial arrangements that can be interconverted simply by free rotation around single bonds (sigma).",
          "es": "Son distintas disposiciones espaciales que se pueden interconvertir simplemente por la rotaci\u00f3n libre en torno a enlaces simples (enlaces sigma), sin que sea necesario romper ning\u00fan enlace qu\u00edmico."
        },
        "isomers": [
          {
            "id": "etano-staggered",
            "carbons": 2,
            "name": {
              "gl": "Etano (Alternado)",
              "en": "Ethane (Staggered)",
              "es": "Etano (Alternado)"
            },
            "iupac": "Ethane",
            "formula": "C\u2082H\u2086",
            "smiles": "CC",
            "cas": "74-84-0",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  0.765,
                  0,
                  0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.765,
                  0,
                  0
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.11,
                  0,
                  1.026
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.11,
                  0.888,
                  -0.513
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.11,
                  -0.888,
                  -0.513
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.11,
                  0,
                  -1.026
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.11,
                  -0.888,
                  0.513
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.11,
                  0.888,
                  0.513
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 2
              },
              {
                "start": 0,
                "end": 3
              },
              {
                "start": 0,
                "end": 4
              },
              {
                "start": 1,
                "end": 5
              },
              {
                "start": 1,
                "end": 6
              },
              {
                "start": 1,
                "end": 7
              }
            ]
          },
          {
            "id": "etano-eclipsed",
            "carbons": 2,
            "name": {
              "gl": "Etano (Eclipsado)",
              "en": "Ethane (Eclipsed)",
              "es": "Etano (Eclipsado)"
            },
            "iupac": "Ethane",
            "formula": "C\u2082H\u2086",
            "smiles": "CC",
            "cas": "74-84-0",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  0.765,
                  0,
                  0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.765,
                  0,
                  0
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.11,
                  0,
                  1.026
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.11,
                  0.888,
                  -0.513
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.11,
                  -0.888,
                  -0.513
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.11,
                  0,
                  1.026
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.11,
                  0.888,
                  -0.513
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.11,
                  -0.888,
                  -0.513
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 0,
                "end": 2
              },
              {
                "start": 0,
                "end": 3
              },
              {
                "start": 0,
                "end": 4
              },
              {
                "start": 1,
                "end": 5
              },
              {
                "start": 1,
                "end": 6
              },
              {
                "start": 1,
                "end": 7
              }
            ]
          },
          {
            "id": "ciclohexano-cadeira",
            "carbons": 6,
            "name": {
              "gl": "Ciclohexano (Cadeira)",
              "en": "Cyclohexane (Chair)",
              "es": "Ciclohexano (Silla)"
            },
            "iupac": "Cyclohexane",
            "formula": "C\u2086H\u2081\u2082",
            "smiles": "C1CCCCC1",
            "cas": "110-82-7",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  0.8653,
                  -0.4996,
                  0.2312
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.8653,
                  0.4996,
                  -0.2312
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.4326,
                  1.249,
                  0.2312
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.2979,
                  0,
                  -0.2313
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.4326,
                  -1.249,
                  0.2312
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.4326,
                  -0.7494,
                  -0.2313
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.8653,
                  -0.4996,
                  1.3283
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.7305,
                  -1.1492,
                  -0.1541
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.8653,
                  0.4996,
                  -1.3283
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.7305,
                  1.1492,
                  0.1541
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.4326,
                  1.249,
                  1.3283
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.4326,
                  2.298,
                  -0.1542
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.2979,
                  0,
                  -1.3284
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.2955,
                  0,
                  0.1542
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.4326,
                  -1.249,
                  1.3283
                ]
              },
              {
                "element": "H",
                "pos": [
                  -0.4326,
                  -2.298,
                  -0.1542
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.4326,
                  -0.7494,
                  -1.3284
                ]
              },
              {
                "element": "H",
                "pos": [
                  0.4326,
                  -1.5488,
                  0.1542
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 2,
                "end": 3
              },
              {
                "start": 3,
                "end": 4
              },
              {
                "start": 4,
                "end": 5
              },
              {
                "start": 5,
                "end": 0
              },
              {
                "start": 0,
                "end": 6
              },
              {
                "start": 0,
                "end": 7
              },
              {
                "start": 1,
                "end": 8
              },
              {
                "start": 1,
                "end": 9
              },
              {
                "start": 2,
                "end": 10
              },
              {
                "start": 2,
                "end": 11
              },
              {
                "start": 3,
                "end": 12
              },
              {
                "start": 3,
                "end": 13
              },
              {
                "start": 4,
                "end": 14
              },
              {
                "start": 4,
                "end": 15
              },
              {
                "start": 5,
                "end": 16
              },
              {
                "start": 5,
                "end": 17
              }
            ]
          },
          {
            "id": "ciclohexano-bote",
            "carbons": 6,
            "name": {
              "gl": "Ciclohexano (Bote)",
              "en": "Cyclohexane (Boat)",
              "es": "Ciclohexano (Bote)"
            },
            "iupac": "Cyclohexane",
            "formula": "C\u2086H\u2081\u2082",
            "smiles": "C1CCCCC1",
            "cas": "110-82-7",
            "atoms": [
              {
                "element": "C",
                "pos": [
                  1.1,
                  0,
                  0.5
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.55,
                  0.95,
                  0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.55,
                  0.95,
                  0
                ]
              },
              {
                "element": "C",
                "pos": [
                  -1.1,
                  0,
                  0.5
                ]
              },
              {
                "element": "C",
                "pos": [
                  -0.55,
                  -0.95,
                  0
                ]
              },
              {
                "element": "C",
                "pos": [
                  0.55,
                  -0.95,
                  0
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.1,
                  0,
                  1.6
                ]
              },
              {
                "element": "H",
                "pos": [
                  2.1,
                  0,
                  0.1
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.1,
                  1.8,
                  0
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.1,
                  1.8,
                  0
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.1,
                  0,
                  1.6
                ]
              },
              {
                "element": "H",
                "pos": [
                  -2.1,
                  0,
                  0.1
                ]
              },
              {
                "element": "H",
                "pos": [
                  -1.1,
                  -1.8,
                  0
                ]
              },
              {
                "element": "H",
                "pos": [
                  1.1,
                  -1.8,
                  0
                ]
              }
            ],
            "bonds": [
              {
                "start": 0,
                "end": 1
              },
              {
                "start": 1,
                "end": 2
              },
              {
                "start": 2,
                "end": 3
              },
              {
                "start": 3,
                "end": 4
              },
              {
                "start": 4,
                "end": 5
              },
              {
                "start": 5,
                "end": 0
              }
            ]
          }
        ]
      },
      {
        "id": "estereoisomeria-configuracional",
        "title": {
          "gl": "B. Isomer\u00eda Configuracional",
          "en": "B. Configurational Isomerism",
          "es": "B. Isomer\u00eda Configuracional"
        },
        "description": {
          "gl": "Estas formas non se poden interconverter mediante unha simple rotaci\u00f3n. \u00c9 necesario romper e formar enlaces qu\u00edmicos.",
          "en": "These forms cannot be interconverted by simple rotation. It is necessary to break and form chemical bonds.",
          "es": "A diferencia de los conf\u00f3rmeros, estas formas no se pueden interconvertir mediante una simple rotaci\u00f3n. Para pasar de un is\u00f3mero configuracional a otro, es estrictamente necesario romper y formar enlaces qu\u00edmicos."
        },
        "subtypes": [
          {
            "id": "estereoisomeria-geometrica",
            "title": {
              "gl": "B.1. Isomer\u00eda Xeom\u00e9trica",
              "en": "B.1. Geometric Isomerism",
              "es": "B.1. Isomer\u00eda Geom\u00e9trica"
            },
            "description": {
              "gl": "Ocorre debido \u00e1 rixidez espacial que impide a rotaci\u00f3n libre, tipicamente causada por un dobre enlace ou un ciclo.",
              "en": "Occurs due to spatial rigidity that prevents free rotation, typically caused by a double bond or a ring.",
              "es": "Ocurre debido a la rigidez espacial que impide la rotaci\u00f3n libre, t\u00edpicamente causada por la presencia de un doble enlace carbono-carbono o por la estructura de un ciclo."
            },
            "isomers": [
              {
                "id": "cis-2-butene",
                "carbons": 4,
                "name": {
                  "gl": "cis-2-Buteno",
                  "en": "cis-2-Butene",
                  "es": "cis-2-Buteno"
                },
                "iupac": "(Z)-but-2-ene",
                "formula": "C\u2084H\u2088",
                "smiles": "C/C=C\\C",
                "cas": "590-18-1",
                "atoms": [
                  {
                    "element": "C",
                    "pos": [
                      -0.6703,
                      0.62,
                      0.0
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.6702,
                      0.62,
                      0.0
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -1.5014,
                      -0.6201,
                      0.0
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      1.5015,
                      -0.62,
                      0.0
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.1945,
                      1.5716,
                      0.0113
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.1943,
                      1.5718,
                      -0.0113
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -2.3834,
                      -0.4587,
                      -0.6295
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -0.9908,
                      -1.4974,
                      -0.4042
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.85,
                      -0.8414,
                      1.0132
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      2.3833,
                      -0.4586,
                      0.63
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.9908,
                      -1.4974,
                      0.4036
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.8506,
                      -0.8408,
                      -1.0131
                    ]
                  }
                ],
                "bonds": [
                  {
                    "start": 0,
                    "end": 1,
                    "type": 2
                  },
                  {
                    "start": 0,
                    "end": 2
                  },
                  {
                    "start": 0,
                    "end": 4
                  },
                  {
                    "start": 1,
                    "end": 3
                  },
                  {
                    "start": 1,
                    "end": 5
                  },
                  {
                    "start": 2,
                    "end": 6
                  },
                  {
                    "start": 2,
                    "end": 7
                  },
                  {
                    "start": 2,
                    "end": 8
                  },
                  {
                    "start": 3,
                    "end": 9
                  },
                  {
                    "start": 3,
                    "end": 10
                  },
                  {
                    "start": 3,
                    "end": 11
                  }
                ]
              },
              {
                "id": "trans-2-butene",
                "carbons": 4,
                "name": {
                  "gl": "trans-2-Buteno",
                  "en": "trans-2-Butene",
                  "es": "trans-2-Buteno"
                },
                "iupac": "(E)-but-2-ene",
                "formula": "C\u2084H\u2088",
                "smiles": "C/C=C/C",
                "cas": "624-64-6",
                "atoms": [
                  {
                    "element": "C",
                    "pos": [
                      -0.5402,
                      -0.3969,
                      -0.0002
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.5401,
                      0.3968,
                      -0.0002
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -1.9442,
                      0.1103,
                      0.0002
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      1.9442,
                      -0.1102,
                      0.0002
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -0.4135,
                      -1.4763,
                      -0.0001
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.4133,
                      1.4763,
                      -0.0002
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -2.4714,
                      -0.2536,
                      0.8874
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.9907,
                      1.2039,
                      0.0004
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -2.4718,
                      -0.2533,
                      -0.8868
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      2.4714,
                      0.2537,
                      0.8874
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.991,
                      -1.2038,
                      0.0003
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      2.4718,
                      0.2536,
                      -0.8868
                    ]
                  }
                ],
                "bonds": [
                  {
                    "start": 0,
                    "end": 1,
                    "type": 2
                  },
                  {
                    "start": 0,
                    "end": 2
                  },
                  {
                    "start": 0,
                    "end": 4
                  },
                  {
                    "start": 1,
                    "end": 3
                  },
                  {
                    "start": 1,
                    "end": 5
                  },
                  {
                    "start": 2,
                    "end": 6
                  },
                  {
                    "start": 2,
                    "end": 7
                  },
                  {
                    "start": 2,
                    "end": 8
                  },
                  {
                    "start": 3,
                    "end": 9
                  },
                  {
                    "start": 3,
                    "end": 10
                  },
                  {
                    "start": 3,
                    "end": 11
                  }
                ]
              },
              {
                "id": "cis-2-pentene",
                "carbons": 5,
                "name": {
                  "gl": "cis-2-Penteno",
                  "en": "cis-2-Pentene",
                  "es": "cis-2-Penteno"
                },
                "iupac": "(Z)-pent-2-ene",
                "formula": "C\u2085H\u2081\u2080",
                "smiles": "CC/C=C\\C",
                "cas": "627-20-3",
                "atoms": [
                  {
                    "element": "C",
                    "pos": [
                      -1.0741,
                      -0.186,
                      -0.6005
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.0293,
                      -0.9326,
                      0.0888
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -1.897,
                      0.6256,
                      0.3878
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      1.2584,
                      -0.4337,
                      0.2839
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      1.6834,
                      0.9267,
                      -0.16
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.7254,
                      -0.9191,
                      -1.0922
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -0.7004,
                      0.4552,
                      -1.4055
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -0.1958,
                      -1.93,
                      0.4572
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -2.7209,
                      1.1265,
                      -0.1307
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.2917,
                      1.3945,
                      0.8789
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -2.3287,
                      -0.0152,
                      1.1643
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.9991,
                      -1.0467,
                      0.7899
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      2.1961,
                      1.429,
                      0.6674
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.8684,
                      1.5834,
                      -0.4699
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      2.3925,
                      0.8407,
                      -0.9893
                    ]
                  }
                ],
                "bonds": [
                  {
                    "start": 0,
                    "end": 1
                  },
                  {
                    "start": 0,
                    "end": 2
                  },
                  {
                    "start": 0,
                    "end": 5
                  },
                  {
                    "start": 0,
                    "end": 6
                  },
                  {
                    "start": 1,
                    "end": 3,
                    "type": 2
                  },
                  {
                    "start": 1,
                    "end": 7
                  },
                  {
                    "start": 2,
                    "end": 8
                  },
                  {
                    "start": 2,
                    "end": 9
                  },
                  {
                    "start": 2,
                    "end": 10
                  },
                  {
                    "start": 3,
                    "end": 4
                  },
                  {
                    "start": 3,
                    "end": 11
                  },
                  {
                    "start": 4,
                    "end": 12
                  },
                  {
                    "start": 4,
                    "end": 13
                  },
                  {
                    "start": 4,
                    "end": 14
                  }
                ]
              },
              {
                "id": "trans-2-pentene",
                "carbons": 5,
                "name": {
                  "gl": "trans-2-Penteno",
                  "en": "trans-2-Pentene",
                  "es": "trans-2-Penteno"
                },
                "iupac": "(E)-pent-2-ene",
                "formula": "C\u2085H\u2081\u2080",
                "smiles": "CC/C=C/C",
                "cas": "646-04-8",
                "atoms": [
                  {
                    "element": "C",
                    "pos": [
                      1.3544,
                      0.5823,
                      0.1632
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -0.0435,
                      0.4085,
                      -0.3523
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      2.19,
                      -0.6673,
                      -0.0665
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -1.0553,
                      -0.0724,
                      0.3844
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -2.4456,
                      -0.2511,
                      -0.1288
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.3393,
                      0.8172,
                      1.2342
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.8165,
                      1.4403,
                      -0.3382
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -0.2175,
                      0.6778,
                      -1.391
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      3.2097,
                      -0.5117,
                      0.3001
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      2.2483,
                      -0.9143,
                      -1.132
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.7701,
                      -1.5303,
                      0.4614
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -0.8776,
                      -0.3523,
                      1.4195
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -2.7388,
                      -1.3025,
                      -0.0515
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -2.5446,
                      0.0546,
                      -1.1751
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -3.1425,
                      0.3452,
                      0.4681
                    ]
                  }
                ],
                "bonds": [
                  {
                    "start": 0,
                    "end": 1
                  },
                  {
                    "start": 0,
                    "end": 2
                  },
                  {
                    "start": 0,
                    "end": 5
                  },
                  {
                    "start": 0,
                    "end": 6
                  },
                  {
                    "start": 1,
                    "end": 3,
                    "type": 2
                  },
                  {
                    "start": 1,
                    "end": 7
                  },
                  {
                    "start": 2,
                    "end": 8
                  },
                  {
                    "start": 2,
                    "end": 9
                  },
                  {
                    "start": 2,
                    "end": 10
                  },
                  {
                    "start": 3,
                    "end": 4
                  },
                  {
                    "start": 3,
                    "end": 11
                  },
                  {
                    "start": 4,
                    "end": 12
                  },
                  {
                    "start": 4,
                    "end": 13
                  },
                  {
                    "start": 4,
                    "end": 14
                  }
                ]
              },
              {
                "id": "cis-1-2-dichlorocyclohexane",
                "carbons": 6,
                "name": {
                  "gl": "cis-1,2-diclorociclohexano",
                  "en": "cis-1,2-dichlorocyclohexane",
                  "es": "cis-1,2-diclorociclohexano"
                },
                "iupac": "cis-1,2-dichlorocyclohexane",
                "formula": "C\u2086H\u2081\u2080Cl\u2082",
                "smiles": "Cl[C@H]1CCCC[C@H]1Cl",
                "cas": "610-57-1",
                "atoms": [
                  {
                    "element": "Cl",
                    "pos": [
                      2.5941,
                      -0.6335,
                      0.1544
                    ]
                  },
                  {
                    "element": "Cl",
                    "pos": [
                      0.7156,
                      1.8057,
                      -1.027
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.8403,
                      -0.5168,
                      0.4861
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.3543,
                      0.942,
                      0.5071
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.056,
                      -1.3881,
                      -0.4984
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -1.1547,
                      0.9935,
                      0.7766
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -1.4442,
                      -1.3194,
                      -0.2152
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -1.9613,
                      0.1166,
                      -0.1836
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.7106,
                      -0.9346,
                      1.492
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.8779,
                      1.4975,
                      1.293
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.3847,
                      -2.4318,
                      -0.4224
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.2452,
                      -1.0743,
                      -1.5323
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.5199,
                      2.0265,
                      0.7271
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.34,
                      0.6497,
                      1.8025
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.6512,
                      -1.7983,
                      0.7501
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.9892,
                      -1.8907,
                      -0.9751
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.9283,
                      0.5384,
                      -1.1949
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -3.0146,
                      0.1181,
                      0.1202
                    ]
                  }
                ],
                "bonds": [
                  {
                    "start": 0,
                    "end": 2
                  },
                  {
                    "start": 1,
                    "end": 3
                  },
                  {
                    "start": 2,
                    "end": 3
                  },
                  {
                    "start": 2,
                    "end": 4
                  },
                  {
                    "start": 2,
                    "end": 8
                  },
                  {
                    "start": 3,
                    "end": 5
                  },
                  {
                    "start": 3,
                    "end": 9
                  },
                  {
                    "start": 4,
                    "end": 6
                  },
                  {
                    "start": 4,
                    "end": 10
                  },
                  {
                    "start": 4,
                    "end": 11
                  },
                  {
                    "start": 5,
                    "end": 7
                  },
                  {
                    "start": 5,
                    "end": 12
                  },
                  {
                    "start": 5,
                    "end": 13
                  },
                  {
                    "start": 6,
                    "end": 7
                  },
                  {
                    "start": 6,
                    "end": 14
                  },
                  {
                    "start": 6,
                    "end": 15
                  },
                  {
                    "start": 7,
                    "end": 16
                  },
                  {
                    "start": 7,
                    "end": 17
                  }
                ]
              },
              {
                "id": "trans-1-2-dichlorocyclohexane",
                "carbons": 6,
                "name": {
                  "gl": "trans-1,2-diclorociclohexano",
                  "en": "trans-1,2-dichlorocyclohexane",
                  "es": "trans-1,2-diclorociclohexano"
                },
                "iupac": "trans-1,2-dichlorocyclohexane",
                "formula": "C\u2086H\u2081\u2080Cl\u2082",
                "smiles": "Cl[C@@H]1CCCC[C@H]1Cl",
                "cas": "822-86-6",
                "atoms": [
                  {
                    "element": "Cl",
                    "pos": [
                      2.031,
                      1.1312,
                      -0.7595
                    ]
                  },
                  {
                    "element": "Cl",
                    "pos": [
                      -2.0313,
                      1.1309,
                      0.7595
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.6633,
                      0.9037,
                      0.3866
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -0.6635,
                      0.9035,
                      -0.3867
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.8764,
                      -0.3842,
                      1.1917
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -0.8764,
                      -0.3845,
                      -1.1917
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.6733,
                      -1.6502,
                      0.3591
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -0.6729,
                      -1.6505,
                      -0.359
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.7109,
                      1.7653,
                      1.0614
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -0.7114,
                      1.7651,
                      -1.0616
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.1733,
                      -0.403,
                      2.0338
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.8795,
                      -0.3957,
                      1.6355
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -0.1733,
                      -0.4032,
                      -2.0339
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.8796,
                      -0.3964,
                      -1.6353
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.7398,
                      -2.5293,
                      1.0104
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.4796,
                      -1.7471,
                      -0.3775
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -0.7389,
                      -2.5297,
                      -1.0103
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -1.4791,
                      -1.7477,
                      0.3777
                    ]
                  }
                ],
                "bonds": [
                  {
                    "start": 0,
                    "end": 2
                  },
                  {
                    "start": 1,
                    "end": 3
                  },
                  {
                    "start": 2,
                    "end": 3
                  },
                  {
                    "start": 2,
                    "end": 4
                  },
                  {
                    "start": 2,
                    "end": 8
                  },
                  {
                    "start": 3,
                    "end": 5
                  },
                  {
                    "start": 3,
                    "end": 9
                  },
                  {
                    "start": 4,
                    "end": 6
                  },
                  {
                    "start": 4,
                    "end": 10
                  },
                  {
                    "start": 4,
                    "end": 11
                  },
                  {
                    "start": 5,
                    "end": 7
                  },
                  {
                    "start": 5,
                    "end": 12
                  },
                  {
                    "start": 5,
                    "end": 13
                  },
                  {
                    "start": 6,
                    "end": 7
                  },
                  {
                    "start": 6,
                    "end": 14
                  },
                  {
                    "start": 6,
                    "end": 15
                  },
                  {
                    "start": 7,
                    "end": 16
                  },
                  {
                    "start": 7,
                    "end": 17
                  }
                ]
              }
            ]
          },
          {
            "id": "estereoisomeria-optica",
            "title": {
              "gl": "B.2. Isomer\u00eda \u00d3ptica",
              "en": "B.2. Optical Isomerism",
              "es": "B.2. Isomer\u00eda \u00d3ptica"
            },
            "description": {
              "gl": "Dase en mol\u00e9culas quirais, que non se poden superpo\u00f1er coa s\u00faa imaxe no espello.",
              "en": "Occurs in chiral molecules, which cannot be superimposed on their mirror image.",
              "es": "Se da en mol\u00e9culas que son quirales, lo que significa que no se pueden superponer perfectamente con su imagen en el espejo (como tu mano derecha y tu mano izquierda)."
            },
            "isomers": [
              {
                "id": "r-lactic-acid",
                "carbons": 3,
                "name": {
                  "gl": "\u00c1cido (R)-l\u00e1ctico",
                  "en": "(R)-Lactic acid",
                  "es": "\u00c1cido (R)-l\u00e1ctico"
                },
                "iupac": "(2R)-2-hydroxypropanoic acid",
                "formula": "C\u2083H\u2086O\u2083",
                "smiles": "C[C@H](O)C(=O)O",
                "cas": "10326-41-7",
                "atoms": [
                  {
                    "element": "O",
                    "pos": [
                      -1.3283,
                      -0.6698,
                      -0.8927
                    ]
                  },
                  {
                    "element": "O",
                    "pos": [
                      0.7303,
                      1.3968,
                      0.1388
                    ]
                  },
                  {
                    "element": "O",
                    "pos": [
                      -1.3482,
                      1.1594,
                      -0.0634
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      0.0305,
                      0.0401,
                      0.1764
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      1.328,
                      -0.584,
                      -0.3475
                    ]
                  },
                  {
                    "element": "C",
                    "pos": [
                      -0.6402,
                      0.7061,
                      -0.1983
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.0454,
                      -0.2241,
                      1.2359
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      2.1477,
                      -0.1866,
                      0.2568
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.3094,
                      -1.6708,
                      -0.2526
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      1.528,
                      -0.3346,
                      -1.3942
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      -2.1818,
                      -0.2255,
                      -0.7961
                    ]
                  },
                  {
                    "element": "H",
                    "pos": [
                      0.301,
                      2.053,
                      0.701
                    ]
                  }
                ],
                "bonds": [
                  {
                    "start": 0,
                    "end": 5
                  },
                  {
                    "start": 0,
                    "end": 10
                  },
                  {
                    "start": 1,
                    "end": 5,
                    "type": 2
                  },
                  {
                    "start": 2,
                    "end": 5
                  },
                  {
                    "start": 2,
                    "end": 11
                  },
                  {
                    "start": 3,
                    "end": 4
                  },
                  {
                    "start": 3,
                    "end": 5
                  },
                  {
                    "start": 3,
                    "end": 6
                  },
                  {
                    "start": 4,
                    "end": 7
                  },
                  {
                    "start": 4,
                    "end": 8
                  },
                  {
                    "start": 4,
                    "end": 9
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
