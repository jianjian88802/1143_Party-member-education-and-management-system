const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"党费登记管理",
                        "menuJump":"列表",
                        "tableName":"dangfeidengji"
                    }
                ],
                "menu":"党费登记管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"奖惩类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiangchengjilu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"单位类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJicengdanwei"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"日志类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhiburizhi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"荣誉类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhiburongyu"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"奖惩记录管理",
                        "menuJump":"列表",
                        "tableName":"jiangchengjilu"
                    }
                ],
                "menu":"奖惩记录管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"基层单位管理",
                        "menuJump":"列表",
                        "tableName":"jicengdanwei"
                    }
                ],
                "menu":"基层单位管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"党员管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"党员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"支部管理",
                        "menuJump":"列表",
                        "tableName":"zhibu"
                    }
                ],
                "menu":"支部管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"支部日志管理",
                        "menuJump":"列表",
                        "tableName":"zhiburizhi"
                    }
                ],
                "menu":"支部日志管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"支部荣誉管理",
                        "menuJump":"列表",
                        "tableName":"zhiburongyu"
                    }
                ],
                "menu":"支部荣誉管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"党费登记管理",
	                    "menuJump":"列表",
	                    "tableName":"dangfeidengji"
	                }
	            ],
	            "menu":"党费登记管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"奖惩记录管理",
	                    "menuJump":"列表",
	                    "tableName":"jiangchengjilu"
	                }
	            ],
	            "menu":"奖惩记录管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"基层单位管理",
	                    "menuJump":"列表",
	                    "tableName":"jicengdanwei"
	                }
	            ],
	            "menu":"基层单位管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"党员管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"党员管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"支部日志管理",
	                    "menuJump":"列表",
	                    "tableName":"zhiburizhi"
	                }
	            ],
	            "menu":"支部日志管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"支部荣誉管理",
	                    "menuJump":"列表",
	                    "tableName":"zhiburongyu"
	                }
	            ],
	            "menu":"支部荣誉管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"支部",
	    "tableName":"zhibu"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"党费登记管理",
	                    "menuJump":"列表",
	                    "tableName":"dangfeidengji"
	                }
	            ],
	            "menu":"党费登记管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"奖惩记录管理",
	                    "menuJump":"列表",
	                    "tableName":"jiangchengjilu"
	                }
	            ],
	            "menu":"奖惩记录管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"党员管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"党员管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"支部管理",
	                    "menuJump":"列表",
	                    "tableName":"zhibu"
	                }
	            ],
	            "menu":"支部管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"支部日志管理",
	                    "menuJump":"列表",
	                    "tableName":"zhiburizhi"
	                }
	            ],
	            "menu":"支部日志管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"支部荣誉管理",
	                    "menuJump":"列表",
	                    "tableName":"zhiburongyu"
	                }
	            ],
	            "menu":"支部荣誉管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"党员",
	    "tableName":"yonghu"
	},
	
]
    }
}
export default menu;