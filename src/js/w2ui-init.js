//w2ui
$(function() {
    $('#grid').w2grid({
        name : 'grid',
        header : '列表名称',
        show : {
            toolbar : true,
            footer : true,
            header : true,
            lineNumbers: true,
            selectColumn: true,
            expandColumn: true
        },
        searches : [ {
            field : 'lname',
            caption : '名字',
            type : 'text'
        }, {
            field : 'fname',
            caption : '姓氏',
            type : 'text'
        }, {
            field : 'email',
            caption : '邮箱',
            type : 'text'
        } ],
        sortData : [ {
            field : 'recid',
            direction : 'ASC'
        } ],
        columns : [ {
            field : 'recid',
            caption : 'ID',
            size : '50px',
            sortable : true,
            attr : 'align=center'
        }, {
            field : 'lname',
            caption : '姓氏',
            size : '30%',
            sortable : true,
            resizable : true
        }, {
            field : 'fname',
            caption : '名字',
            size : '30%',
            sortable : true,
            resizable : true
        }, {
            field : 'email',
            caption : '邮件',
            size : '40%',
            sortable : true,
            resizable : true
        }, {
            field : 'sdate',
            caption : '起始时间',
            size : '120px',
            sortable : true,
            resizable : true
        } ],
        records : [ {
            recid : 1,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 2,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 3,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 4,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 5,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 6,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 7,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 8,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 9,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 20,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 21,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 22,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 23,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 24,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 25,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 26,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 27,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 28,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 31,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 32,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 33,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 34,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 35,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 36,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 37,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 38,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 39,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 40,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 41,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 42,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 43,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 44,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 45,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 46,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 47,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 48,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 51,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 52,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 53,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 54,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 55,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 56,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 57,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 58,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 59,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 60,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 61,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 62,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 63,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 64,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 65,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 66,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 67,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 68,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        } ]
        ,
        onExpand: function (event) {
            $('#'+event.box_id).html('<div style="padding: 10px">Expanded content</div>').animate({ 'height': 100 }, 100);
        },
        buttons: {
            'reload'   : { type: 'button', id: 'w2ui-reload', icon: 'w2ui-icon-reload', hint: w2utils.lang('重新加载数据') },
            'columns'  : { type: 'drop', id: 'w2ui-column-on-off', icon: 'w2ui-icon-columns', hint: w2utils.lang('显示/隐藏 字段'), arrow: false, html: '' },
            'search'   : { type: 'html',   id: 'w2ui-search',
                           html: '<div class="w2ui-icon icon-search-down w2ui-search-down" title="'+ '选择查询字段' +'" '+
                           'onclick="var obj = w2ui[$(this).parents(\'div.w2ui-grid\').attr(\'name\')]; obj.searchShowFields();"></div>'
                         },
            'search-go': { type: 'check',  id: 'w2ui-search-advanced', caption: w2utils.lang('查询...'), hint: w2utils.lang('打开查询字段') },
            'add'      : { type: 'button', id: 'w2ui-add', caption: w2utils.lang('新增'), hint: w2utils.lang('添加新纪录'), icon: 'w2ui-icon-plus' },
            'edit'     : { type: 'button', id: 'w2ui-edit', caption: w2utils.lang('编辑'), hint: w2utils.lang('编辑记录'), icon: 'w2ui-icon-pencil', disabled: true },
            'delete'   : { type: 'button', id: 'w2ui-delete', caption: w2utils.lang('删除'), hint: w2utils.lang('删除选择记录'), icon: 'w2ui-icon-cross', disabled: true },
            'save'     : { type: 'button', id: 'w2ui-save', caption: w2utils.lang('保存'), hint: w2utils.lang('保存修改'), icon: 'w2ui-icon-check' }
        }
    });
});