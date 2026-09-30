# -*- coding: utf-8 -*-
"""
福建旅行 · 微信小程序后端 API
================================================================
基于 Flask 的轻量后端，为「福建旅行」微信小程序提供数据接口。

启动方式：
    cd backend
    pip install -r requirements.txt
    python app.py

默认地址：http://127.0.0.1:5000
"""

from flask import Flask, jsonify, request
from data import (CITIES, ATTRACTIONS, FOODS, CULTURES,
                  get_plan, get_lucky, get_home, search_all, with_images)

app = Flask(__name__)


@app.after_request
def add_cors_headers(resp):
    """手动添加 CORS 头，让小程序能够跨域访问（本地开发免域名校验）。"""
    resp.headers["Access-Control-Allow-Origin"] = "*"
    resp.headers["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return resp


def ok(data):
    """统一成功响应结构。"""
    return jsonify({"code": 0, "data": data})


def fail(msg, code=1):
    """统一失败响应结构。"""
    return jsonify({"code": code, "message": msg}), 200


# ---------------------------------------------------------------------------
# 首页 / 汇总
# ---------------------------------------------------------------------------
@app.route("/api/home")
def api_home():
    return ok(get_home())


# ---------------------------------------------------------------------------
# 城市
# ---------------------------------------------------------------------------
@app.route("/api/cities")
def api_cities():
    return ok(CITIES)


# ---------------------------------------------------------------------------
# 景点
# ---------------------------------------------------------------------------
@app.route("/api/attractions")
def api_attractions():
    city = request.args.get("city")
    data = [with_images(a) for a in ATTRACTIONS if not city or a["city"] == city]
    return ok(data)


@app.route("/api/attractions/<int:aid>")
def api_attraction(aid):
    item = next((a for a in ATTRACTIONS if a["id"] == aid), None)
    if not item:
        return fail("未找到该景点")
    return ok(with_images(item))


# ---------------------------------------------------------------------------
# 美食
# ---------------------------------------------------------------------------
@app.route("/api/foods")
def api_foods():
    city = request.args.get("city")
    data = [f for f in FOODS if not city or f["city"] == city]
    return ok(data)


@app.route("/api/foods/<int:fid>")
def api_food(fid):
    item = next((f for f in FOODS if f["id"] == fid), None)
    if not item:
        return fail("未找到该美食")
    return ok(item)


# ---------------------------------------------------------------------------
# 人文
# ---------------------------------------------------------------------------
@app.route("/api/cultures")
def api_cultures():
    city = request.args.get("city")
    data = [c for c in CULTURES if not city or c["city"] == city]
    return ok(data)


@app.route("/api/cultures/<int:cid>")
def api_culture(cid):
    item = next((c for c in CULTURES if c["id"] == cid), None)
    if not item:
        return fail("未找到该人文")
    return ok(item)


# ---------------------------------------------------------------------------
# 行程规划
# ---------------------------------------------------------------------------
@app.route("/api/plan")
def api_plan():
    days = request.args.get("days", 3)
    try:
        days = int(days)
    except ValueError:
        days = 3
    return ok(get_plan(days))


# ---------------------------------------------------------------------------
# 随机推荐（抽签）
# ---------------------------------------------------------------------------
@app.route("/api/lucky")
def api_lucky():
    return ok(get_lucky())


# ---------------------------------------------------------------------------
# 关键词搜索
# ---------------------------------------------------------------------------
@app.route("/api/search")
def api_search():
    q = request.args.get("q", "")
    return ok(search_all(q))


if __name__ == "__main__":
    # host=0.0.0.0 便于手机真机在同一局域网内访问
    app.run(host="0.0.0.0", port=5000, debug=True)
