define({ "api": [
  {
    "type": "method",
    "url": "/download/errorFile",
    "title": "下载错误信息文件",
    "group": "Download",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>文件名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    filename: 1566678276867.csv\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Respinse:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./rpc/controller/DownloadController.java",
    "groupTitle": "文件下载",
    "name": "MethodDownloadErrorfile"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "F__study_jidi_project_CTG_new_repository_cumstomer_src_main_java_com_ctg_cumstomer_doc_main_js",
    "groupTitle": "F__study_jidi_project_CTG_new_repository_cumstomer_src_main_java_com_ctg_cumstomer_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/role/listByPage",
    "title": "分页获取角色",
    "group": "RoleInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页序号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页的行数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\npage:1\nrows:3\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"ids\": null,\n    \"name\": \"admin\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 1,\n    \"rights\": \"addUser|deleteUser|updateUser|uploadData|downloadData\",\n    \"message\": \"数据系统管理员，拥有所有权限\",\n    \"createTime\": null,\n    \"disable\": false\n    },\n    {\n    \"ids\": null,\n    \"name\": \"admin3\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 2,\n    \"rights\": \"abc\",\n    \"message\": \"删除测试\",\n    \"createTime\": null,\n    \"disable\": false\n    },\n    {\n    \"ids\": null,\n    \"name\": \"admin2\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 3,\n    \"rights\": \"abc\",\n    \"message\": \"删除测试\",\n    \"createTime\": null,\n    \"disable\": false\n    }\n    ],\n    \"count\": 7\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user/controller/RoleController.java",
    "groupTitle": "角色信息",
    "name": "GetRoleListbypage"
  },
  {
    "type": "post",
    "url": "/role/add",
    "title": "新增角色",
    "group": "RoleInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rights",
            "description": "<p>角色权限(以“|”分隔)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>角色信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    name:admin\n    rights:addUser|deleteUser|updateUser|uploadData|downloadData\n    message:数据系统管理员，拥有所有权限\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 1,\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Respinse:",
          "content": "{\n    \"resultCode\": 403,\n    \"resultMsg\": \"角色权限空\",\n    \"data\": {\n    \"ids\": null,\n    \"name\": \"admin\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": null,\n    \"rights\": null,\n    \"message\": \"数据系统管理员，拥有所有权限\",\n    \"createTime\": null,\n    \"disable\": null\n    },\n    \"count\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/controller/RoleController.java",
    "groupTitle": "角色信息",
    "name": "PostRoleAdd"
  },
  {
    "type": "post",
    "url": "/role/delete",
    "title": "删除角色",
    "group": "RoleInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>单个id（传参方式二选一）</p>"
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>多个id（传参方式二选一）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求-单个id:",
          "content": "{\n    id:2\n}",
          "type": "json"
        },
        {
          "title": "请求-多个id:",
          "content": "{\n    ids:[3,4,5,6,7]\n}",
          "type": "json"
        },
        {
          "title": "响应-单个id:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 1,\n    \"count\": 0\n}",
          "type": "json"
        },
        {
          "title": "响应-多个id:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 5,\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user/controller/RoleController.java",
    "groupTitle": "角色信息",
    "name": "PostRoleDelete"
  },
  {
    "type": "post",
    "url": "/role/update",
    "title": "修改角色信息",
    "group": "RoleInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rights",
            "description": "<p>角色权限(以“|”分隔)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>角色信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disable",
            "description": "<p>是否可用(0=可用,1=不可用)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:2\n    disable:0  //取消删除,启动为\"可用\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 1,\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user/controller/RoleController.java",
    "groupTitle": "角色信息",
    "name": "PostRoleUpdate"
  },
  {
    "type": "get",
    "url": "/search/ctgData/byFilter",
    "title": "CTG数据分页筛选",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页的行数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctgNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dlMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dlMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dpMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dpMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dsMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dsMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "edMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "edMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fasttimeMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fasttimeMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fastvalueMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fastvalueMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrcycleMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrcycleMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrfastMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrfastMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrfast_evaluation_0Min",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrfast_evaluation_0Max",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrfast_evaluation_1Min",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrfast_evaluation_1Max",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrvarMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhrvarMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhslow_evaluationMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fhslow_evaluationMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fmoveMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fmoveMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "frh_evaluationMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "frh_evaluationMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "haveaccdecMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "haveaccdecMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "highltvMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "highltvMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ldMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ldMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "lowltvMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "lowltvMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "nstMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "nstMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "nst_evaluationMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "nst_evaluationMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "stvMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "stvMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ucktimeMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ucktimeMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ucnextMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ucnextMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "uctimesMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "uctimesMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "var_evaluationMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "var_evaluationMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vdMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vdMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vdtimeMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vdtimeMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ageMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ageMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "base_lineMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "base_lineMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "check_dateMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "check_dateMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "check_place",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_batch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_brand",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "expert_read_beginMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "expert_read_beginMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "expert_read_endMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "expert_read_endMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "gestationalAgeMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "gestationalAgeMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gravida_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "judge_dateMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "judge_dateMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "lost_rateMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "lost_rateMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "up_timeMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "up_timeMax",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "watch_timeMin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "watch_timeMax",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    page:1\n    rows:3\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"currentUID\": 0,\n    \"ids\": null,\n    \"name\": null,\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 33014,\n    \"packageNumber\": null,\n    \"ctgNumber\": null,\n    \"gravidaId\": null,\n    \"gestationalAge\": null,\n    \"checkPlace\": null,\n    \"times\": 1,\n    \"watchTime\": null,\n    \"age\": 25,\n    \"checkDate\": null,\n    \"judgeDate\": null,\n    \"fileName\": null,\n    \"deviceBrand\": \"暂无\",\n    \"deviceEdition\": \"暂无\",\n    \"deviceBatch\": null,\n    \"expertReadBegin\": 0,\n    \"expertReadEnd\": 0,\n    \"baseLine\": 0,\n    \"fhrvar\": 8,\n    \"fhrcycle\": 3,\n    \"fhrfast\": 0,\n    \"fhslow\": 0,\n    \"ed\": 0,\n    \"ld\": 0,\n    \"vd\": 0,\n    \"dp\": 0,\n    \"dl\": 0,\n    \"ds\": 0,\n    \"fmove\": 7,\n    \"uctimes\": 53,\n    \"fasttime\": 0,\n    \"fastvalue\": 0,\n    \"stv\": 4.66,\n    \"highltv\": 5,\n    \"lowltv\": 1,\n    \"haveaccdec\": 14,\n    \"lostRate\": 0,\n    \"ucstrong\": 30,\n    \"ucnext\": 0,\n    \"ucktime\": 0,\n    \"vdtime\": 0,\n    \"frhEvaluation\": 0,\n    \"varEvaluation\": 0,\n    \"fhslowEvaluation\": 0,\n    \"fhrfastEvaluation1\": 0,\n    \"fhrfastEvaluation0\": 0,\n    \"nstEvaluation\": 0,\n    \"nst\": 2,\n    \"upTime\": 0,\n    \"ctgCode\": null\n    },\n    {\n    \"currentUID\": 0,\n    \"ids\": null,\n    \"name\": null,\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 33015,\n    \"packageNumber\": null,\n    \"ctgNumber\": null,\n    \"gravidaId\": null,\n    \"gestationalAge\": null,\n    \"checkPlace\": null,\n    \"times\": 1,\n    \"watchTime\": null,\n    \"age\": 31,\n    \"checkDate\": null,\n    \"judgeDate\": null,\n    \"fileName\": null,\n    \"deviceBrand\": \"暂无\",\n    \"deviceEdition\": \"暂无\",\n    \"deviceBatch\": null,\n    \"expertReadBegin\": 0,\n    \"expertReadEnd\": 0,\n    \"baseLine\": 0,\n    \"fhrvar\": 10,\n    \"fhrcycle\": 4,\n    \"fhrfast\": 2,\n    \"fhslow\": 0,\n    \"ed\": 0,\n    \"ld\": 0,\n    \"vd\": 0,\n    \"dp\": 0,\n    \"dl\": 0,\n    \"ds\": 0,\n    \"fmove\": 12,\n    \"uctimes\": 74,\n    \"fasttime\": 20,\n    \"fastvalue\": 24,\n    \"stv\": 6.63,\n    \"highltv\": 6,\n    \"lowltv\": 4,\n    \"haveaccdec\": 10,\n    \"lostRate\": 0,\n    \"ucstrong\": 44,\n    \"ucnext\": 304,\n    \"ucktime\": 0,\n    \"vdtime\": 0,\n    \"frhEvaluation\": 0,\n    \"varEvaluation\": 0,\n    \"fhslowEvaluation\": 0,\n    \"fhrfastEvaluation1\": 0,\n    \"fhrfastEvaluation0\": 0,\n    \"nstEvaluation\": 0,\n    \"nst\": 1,\n    \"upTime\": 0,\n    \"ctgCode\": null\n    },\n    {\n    \"currentUID\": 0,\n    \"ids\": null,\n    \"name\": null,\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 33016,\n    \"packageNumber\": null,\n    \"ctgNumber\": null,\n    \"gravidaId\": null,\n    \"gestationalAge\": null,\n    \"checkPlace\": null,\n    \"times\": 1,\n    \"watchTime\": null,\n    \"age\": 25,\n    \"checkDate\": null,\n    \"judgeDate\": null,\n    \"fileName\": null,\n    \"deviceBrand\": \"暂无\",\n    \"deviceEdition\": \"暂无\",\n    \"deviceBatch\": null,\n    \"expertReadBegin\": 0,\n    \"expertReadEnd\": 0,\n    \"baseLine\": 0,\n    \"fhrvar\": 12,\n    \"fhrcycle\": 4,\n    \"fhrfast\": 1,\n    \"fhslow\": 1,\n    \"ed\": 0,\n    \"ld\": 0,\n    \"vd\": 1,\n    \"dp\": 0,\n    \"dl\": 1,\n    \"ds\": 0,\n    \"fmove\": 10,\n    \"uctimes\": 0,\n    \"fasttime\": 8,\n    \"fastvalue\": 13,\n    \"stv\": 6.18,\n    \"highltv\": 13,\n    \"lowltv\": 1,\n    \"haveaccdec\": 6,\n    \"lostRate\": 0,\n    \"ucstrong\": 0,\n    \"ucnext\": 0,\n    \"ucktime\": 0,\n    \"vdtime\": 17,\n    \"frhEvaluation\": 0,\n    \"varEvaluation\": 0,\n    \"fhslowEvaluation\": 0,\n    \"fhrfastEvaluation1\": 0,\n    \"fhrfastEvaluation0\": 0,\n    \"nstEvaluation\": 0,\n    \"nst\": 2,\n    \"upTime\": 0,\n    \"ctgCode\": null\n    }\n    ],\n    \"count\": 452\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./rpc/controller/SearchController.java",
    "groupTitle": "数据查询",
    "name": "GetSearchCtgdataByfilter"
  },
  {
    "type": "get",
    "url": "/search/ctgData/detail",
    "title": "获取单条ctg的详细数据",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "packageNumber",
            "description": "<p>包号(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ctgNumber",
            "description": "<p>编号(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页的行数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctgCode",
            "description": "<p>ctg联合编号(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "expertId",
            "description": "<p>医师id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    packageNumber: 15\n    ctgNumber: 7650\n    ctgCode: 157650\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": {\n    \"lineData\": {\n    \"fm\":[1,2,3],\n    \"uc\":[1,2,3],\n    \"fhr\":[1,2,3]\n    },\n    \"judgeList\": [\n    {\n    \"currentUID\": 0,\n    \"ids\": null,\n    \"name\": null,\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 32110,\n    \"ctgId\": null,\n    \"expertId\": null,\n    \"baseLine\": 0,\n    \"fhrvar\": 8,\n    \"fhrcycle\": 3,\n    \"fhrfast\": 0,\n    \"fhslow\": 0,\n    \"ed\": 0,\n    \"ld\": 0,\n    \"vd\": 0,\n    \"dp\": 0,\n    \"dl\": 0,\n    \"ds\": 0,\n    \"fmove\": 7,\n    \"uctimes\": 0,\n    \"fasttime\": 0,\n    \"fastvalue\": 0,\n    \"judgeDate\": null,\n    \"nst\": 2,\n    \"notes\": null,\n    \"upTime\": 0,\n    \"ctgCode\": null\n    }\n    ]\n    },\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./rpc/controller/SearchController.java",
    "groupTitle": "数据查询",
    "name": "GetSearchCtgdataDetail"
  },
  {
    "type": "get",
    "url": "/search/history",
    "title": "分页获取当前用户的导入历史",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页的行数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    page:1\n    rows:3\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"currentUID\": 0,\n    \"ids\": null,\n    \"name\": \"导入CTG数据 数据上传示例.xls\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 28,\n    \"createTime\": \"2019-08-22T06:42:21.000+0000\",\n    \"status\": 1,\n    \"errorUrl\": \"1566456196402.csv\",\n    \"createBy\": 2,\n    \"remark\": null\n    },\n    {\n    \"currentUID\": 0,\n    \"ids\": null,\n    \"name\": \"导入CTG数据 数据上传示例.xls\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 29,\n    \"createTime\": \"2019-08-22T06:49:42.000+0000\",\n    \"status\": 1,\n    \"errorUrl\": \"1566456619843.csv\",\n    \"createBy\": 2,\n    \"remark\": null\n    },\n    {\n    \"currentUID\": 0,\n    \"ids\": null,\n    \"name\": \"导入CTG数据 数据上传示例.xls\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 30,\n    \"createTime\": \"2019-08-22T07:09:21.000+0000\",\n    \"status\": 1,\n    \"errorUrl\": \"1566457818542.csv\",\n    \"createBy\": 2,\n    \"remark\": null\n    }\n    ],\n    \"count\": 17\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"timestamp\": \"2019-08-28T05:12:46.001+0000\",\n    \"status\": 500,\n    \"error\": \"Internal Server Error\",\n    \"message\": \"无token，请登录\",\n    \"path\": \"/ctg/search/history\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./rpc/controller/SearchController.java",
    "groupTitle": "数据查询",
    "name": "GetSearchHistory"
  },
  {
    "type": "post",
    "url": "/task/upload/ctgdata",
    "title": "导入CTG数据",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "upFile",
            "description": "<p>文件（.zip / .xls）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    upFile: F://hellp.zip\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": \"创建任务成功\",\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./rpc/controller/TaskController.java",
    "groupTitle": "文件上传",
    "name": "PostTaskUploadCtgdata"
  },
  {
    "type": "post",
    "url": "/task/upload/lines",
    "title": "上传曲线数据文件",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "packageNumber",
            "description": "<p>曲线数据所属包号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upFile",
            "description": "<p>文件（.zip / .txt）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    packageNumber: 15,\n    upFile: F://hellp.zip\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": \"创建任务成功\",\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./rpc/controller/TaskController.java",
    "groupTitle": "文件上传",
    "name": "PostTaskUploadLines"
  },
  {
    "type": "get",
    "url": "/user/listByPage",
    "title": "分页获取用户(可筛选)",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页的行数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名称(模糊查询)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号(精确查询)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-无筛选:",
          "content": "{\npage:1\nrows:3\n}",
          "type": "json"
        },
        {
          "title": "Request-有筛选:",
          "content": "{\n    name:Z\n}",
          "type": "json"
        },
        {
          "title": "Success-无筛选:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"ids\": null,\n    \"name\": \"管理员1\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 2,\n    \"account\": \"admin\",\n    \"password\": \"-1ef523c6b645a65441a91fa80df077c2\",\n    \"roleId\": null,\n    \"createTime\": null,\n    \"remark\": null,\n    \"disable\": false\n    },\n    {\n    \"ids\": null,\n    \"name\": \"ZTY\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 4,\n    \"account\": \"zty\",\n    \"password\": \"202cb962ac59075b964b07152d234b70\",\n    \"roleId\": null,\n    \"createTime\": null,\n    \"remark\": null,\n    \"disable\": false\n    },\n    {\n    \"ids\": null,\n    \"name\": \"权限测试2\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 7,\n    \"account\": \"test\",\n    \"password\": \"202cb962ac59075b964b07152d234b70\",\n    \"roleId\": null,\n    \"createTime\": null,\n    \"remark\": null,\n    \"disable\": false\n    }\n    ],\n    \"count\": 6\n}",
          "type": "json"
        },
        {
          "title": "Success-有筛选:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"ids\": null,\n    \"name\": \"ZTY\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 4,\n    \"account\": \"zty\",\n    \"password\": \"202cb962ac59075b964b07152d234b70\",\n    \"roleId\": null,\n    \"createTime\": null,\n    \"remark\": null,\n    \"disable\": false\n    }\n    ],\n    \"count\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user/controller/UserController.java",
    "groupTitle": "用户信息",
    "name": "GetUserListbypage"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "添加用户",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    name:管理员1\n    account:admin\n    password:123456\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 1,\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user/controller/UserController.java",
    "groupTitle": "用户信息",
    "name": "PostUserAdd"
  },
  {
    "type": "post",
    "url": "/user/delete",
    "title": "删除用户",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>单个id（传参方式二选一）</p>"
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>多个id（传参方式二选一）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求-单个id:",
          "content": "{\n    id:2\n}",
          "type": "json"
        },
        {
          "title": "请求-多个id:",
          "content": "{\n    ids:[3,4,5,6,7]\n}",
          "type": "json"
        },
        {
          "title": "响应-单个id:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 1,\n    \"count\": 0\n}",
          "type": "json"
        },
        {
          "title": "响应-多个id:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 5,\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user/controller/UserController.java",
    "groupTitle": "用户信息",
    "name": "PostUserDelete"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    account:admin\n    password:123456\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": {\n    \"message\": \"OoI6ss5a0/ZbN4qHsLfi+A\",   //这个是token\n    \"loginAccountInfo\": {\n    \"ids\": null,\n    \"name\": \"ZTY\",\n    \"rows\": 30,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 4,\n    \"account\": \"zty\",\n    \"password\": \"202cb962ac59075b964b07152d234b70\",\n    \"roleId\": null,\n    \"createTime\": null,\n    \"remark\": null,\n    \"disable\": false\n    },\n    \"success\": true\n    },\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Respinse:",
          "content": "{\n    \"resultCode\": 444,\n    \"resultMsg\": \"账号不存在\",\n    \"data\": null,\n    \"count\": 0\n}",
          "type": "json"
        },
        {
          "title": "Error-Respinse:",
          "content": "{\n    \"resultCode\": 444,\n    \"resultMsg\": \"密码错误\",\n    \"data\": null,\n    \"count\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/controller/UserController.java",
    "groupTitle": "用户信息",
    "name": "PostUserLogin"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "修改用户信息",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disable",
            "description": "<p>是否可用(0=可用,1=不可用)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:2\n    disable:0  //取消删除,启动为\"可用\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 1,\n    \"count\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>总数据量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user/controller/UserController.java",
    "groupTitle": "用户信息",
    "name": "PostUserUpdate"
  }
] });
