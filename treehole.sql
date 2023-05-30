-- ----------------------------
-- 用户表  create_time update_time delete_time三个字段
-- 这个是由于Sequelize会在生成表的时候额外的多加create_time 和 update_time，这个我们一般都是需要的，而且平时操作不用关系，Sequelize会帮我们维护这三个信息。
-- ----------------------------
DROP TABLE IF EXISTS thuser;
CREATE TABLE thuser
(
    id          int(11)          NOT NULL AUTO_INCREMENT,
    username    varchar(50)      NOT NULL COMMENT '用户名',
    phone       varchar(11)      NOT NULL unique COMMENT '手机号',
    password    varchar(32)      NOT NULL COMMENT '密码 md5加密',
    face_url    varchar(250)     NOT NULL COMMENT '用户头像地址',
    create_time datetime(3)      NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    update_time datetime(3)      NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    delete_time datetime(3)               DEFAULT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;


-- ----------------------------
-- 树洞消息表
-- ----------------------------
DROP TABLE IF EXISTS message;
CREATE TABLE message
(
    id          int(11)          NOT NULL AUTO_INCREMENT,
    user_id     int(11)          NOT NULL COMMENT '用户id',
    username    varchar(50)      NOT NULL COMMENT '用户名',
    face_url    varchar(250)     NOT NULL COMMENT '用户头像地址',
    content     varchar(500)     NOT NULL COMMENT '树洞消息内容',
    total_likes int(11)          NOT NULL DEFAULT 0, 
    send_timestamp    int(11)    NOT NULL COMMENT '发布的时间戳',
    create_time datetime(3)      NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    update_time datetime(3)      NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    delete_time datetime(3)               DEFAULT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;


