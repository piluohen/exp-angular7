export default [
  {
    value: '10',
    label: 'A栋',
    children: [
      {
        value: '1001',
        label: '1单元',
        children: [
          {
            value: '100101',
            label: '1层',
            children: [
              {
                value: '10010101',
                label: '101',
                isLeaf: true
              },
              {
                value: '10010102',
                label: '102',
                isLeaf: true
              }
            ]
          },
          {
            value: '100102',
            label: '2层',
            children: [
              {
                value: '10010201',
                label: '201',
                isLeaf: true
              },
              {
                value: '10010202',
                label: '202',
                isLeaf: true
              },
              {
                value: '10010203',
                label: '203',
                isLeaf: true
              },
              {
                value: '10010204',
                label: '204',
                isLeaf: true
              }
            ]
          }
        ]
      },
      {
        value: '1002',
        label: '2单元',
        children: [
          {
            value: '100201',
            label: '1层',
            children: [
              {
                value: '10020101',
                label: '101',
                isLeaf: true
              },
              {
                value: '10020102',
                label: '102',
                isLeaf: true
              }
            ]
          }
        ]
      }
    ]
  }
];
