// JavaScript Document
	$(function() {

        var defaultData = [
          {
            text: 'Parent 1',
            href: '#parent1',
            tags: ['4'],
            nodes: [
              {
                text: 'Child 1',
                href: '#child1',
                tags: ['2'],
                nodes: [
                  {
                    text: 'Grandchild 1',
                    href: '#grandchild1',
                    tags: ['0']
                  },
                  {
                    text: 'Grandchild 2',
                    href: '#grandchild2',
                    tags: ['0']
                  }
                ]
              },
              {
                text: 'Child 2',
                href: '#child2',
                tags: ['0']
              }
            ]
          },
          {
            text: 'Parent 2',
            href: '#parent2',
            tags: ['0']
          },
          {
            text: 'Parent 3',
            href: '#parent3',
             tags: ['0']
          },
          {
            text: 'Parent 4',
            href: '#parent4',
            tags: ['0']
          },
          {
            text: 'Parent 5',
            href: '#parent5'  ,
            tags: ['0']
          }
        ];

        var alternateData = [
          {
            text: 'Parent 1',
            tags: ['2'],
            nodes: [
              {
                text: 'Child 1',
                tags: ['3'],
                nodes: [
                  {
                    text: 'Grandchild 1',
                    tags: ['6']
                  },
                  {
                    text: 'Grandchild 2',
                    tags: ['3']
                  }
                ]
              },
              {
                text: 'Child 2',
                tags: ['3']
              }
            ]
          },
          {
            text: 'Parent 2',
			icon: 'fa fa-line-chart',
            tags: ['7']
          },
          {
            text: 'Parent 3',
            icon: 'glyphicon glyphicon-earphone',
            href: '#demo',
            tags: ['11']
          },
          {
            text: 'Parent 4',
            icon: 'glyphicon glyphicon-cloud-download',
            href: '/demo.html',
            tags: ['19'],
            selected: true
          },
          {
            text: 'Parent 5',
            icon: 'glyphicon glyphicon-certificate',
            color: '#fff',
            backColor: '#34495E',
            href: 'http://www.tesco.com',
            tags: ['available','0']
          }
        ];

        var json = '[' +
          '{' +
            '"text": "Parent 1",' +
            '"nodes": [' +
              '{' +
                '"text": "Child 1",' +
                '"nodes": [' +
                  '{' +
                    '"text": "Grandchild 1"' +
                  '},' +
                  '{' +
                    '"text": "Grandchild 2"' +
                  '}' +
                ']' +
              '},' +
              '{' +
                '"text": "Child 2"' +
              '}' +
            ']' +
          '},' +
          '{' +
            '"text": "Parent 2"' +
          '},' +
          '{' +
            '"text": "Parent 3"' +
          '},' +
          '{' +
            '"text": "Parent 4"' +
          '},' +
          '{' +
            '"text": "Parent 5"' +
          '}' +
        ']';


        $('#treeview1').treeview({
          data: defaultData
        });

        $('#treeview2').treeview({
          levels: 1,
		  nodeIcon:false,
          data: defaultData
        });

        $('#treeview3').treeview({
          levels: 99,
          data: defaultData
        });

        $('#treeview4').treeview({
          
          color: "#54ade5",
          data: defaultData
        });

        $('#treeview5').treeview({
          color: "#54ade5",
          expandIcon: 'glyphicon glyphicon-chevron-right',
          collapseIcon: 'glyphicon glyphicon-chevron-down',
          nodeIcon: 'glyphicon glyphicon-bookmark',
          data: defaultData
        });

        $('#treeview6').treeview({
          color: "#54ade5",
          expandIcon: "glyphicon glyphicon-stop",
          collapseIcon: "glyphicon glyphicon-unchecked",
          nodeIcon: "glyphicon glyphicon-user",
          showTags: true,
          data: defaultData
        });

        $('#treeview7').treeview({
		  nodeIcon: "fa fa-angle-double-right",
          color: "#54ade5",
          showBorder: false,
		  selectedColor: "#54ade5",
          selectedBackColor: "#ffffff",
          data: defaultData
        });

        $('#treeview8').treeview({
          expandIcon: "fa fa-plus-square-o",
          collapseIcon: "fa fa-minus-square-o",
          nodeIcon: "fa fa-angle-double-right",
          color: "#fff",
          backColor: "#1ABC9C",
          onhoverColor: "#16A085",
          showBorder: false,
          showTags: true,
          highlightSelected: true, 
          selectedColor: "#fff",
          selectedBackColor: "#16A085",
          data: defaultData
        });

        $('#treeview9').treeview({
          expandIcon: "fa fa-plus-square",
          collapseIcon: "fa fa-minus-square",
          nodeIcon: "glyphicon glyphicon-user",
          color: "#fff",
          backColor: "#1ABC9C",
          onhoverColor: "#16A085",
          borderColor: "#34495E",
          showBorder: false,
          showTags: true,
          highlightSelected: true, 
          selectedColor: "#fff",
          selectedBackColor: "#16A085",
          data: alternateData
        });

        $('#treeview10').treeview({
          color: "#54ade5",
          enableLinks: true,
          data: defaultData
        });

        $('#treeview11').treeview({
          color: "#54ade5",
          data: defaultData,
          onNodeSelected: function(event, node) {
            $('#event_output').prepend('<p>You clicked ' + node.text + '</p>');
          }
        });

        // $('#treeview11').on('nodeSelected', function (event, node) {
        //   $('#event_output').prepend('<p>You clicked ' + node.text + '</p>');
        // });


        $('#treeview12').treeview({
          data: json
        });

  		});