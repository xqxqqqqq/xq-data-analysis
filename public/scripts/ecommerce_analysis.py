#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
电商销售数据分析脚本
数据分析学习网站示例代码
"""

import pandas as pd
import numpy as np

def load_sales_data(file_path='datasets/ecommerce_sales.csv'):
    """加载电商销售数据"""
    try:
        df = pd.read_csv(file_path)
        print(f'数据加载成功，共 {len(df)} 条记录')
        return df
    except Exception as e:
        print(f'数据加载失败: {e}')
        return None

def data_overview(df):
    """数据概览"""
    print('=' * 60)
    print('数据概览')
    print('=' * 60)
    
    # 基本信息
    print('\\n1. 数据形状:', df.shape)
    
    # 列信息
    print('\\n2. 列名:', df.columns.tolist())
    
    # 数据类型
    print('\\n3. 数据类型:')
    print(df.dtypes)
    
    # 缺失值检查
    print('\\n4. 缺失值统计:')
    print(df.isnull().sum())
    
    # 前5行
    print('\\n5. 数据预览:')
    print(df.head())

def sales_summary(df):
    """销售汇总分析"""
    print('\\n' + '=' * 60)
    print('销售汇总分析')
    print('=' * 60)
    
    # 计算总销售额
    df['total_amount'] = df['quantity'] * df['unit_price']
    total_sales = df['total_amount'].sum()
    avg_order = df['total_amount'].mean()
    total_orders = len(df)
    total_quantity = df['quantity'].sum()
    
    print(f'总销售额: {total_sales:,.2f}元')
    print(f'总订单数: {total_orders}')
    print(f'总销量: {total_quantity}')
    print(f'平均订单金额: {avg_order:,.2f}元')

def category_analysis(df):
    """品类分析"""
    print('\\n' + '=' * 60)
    print('品类销售分析')
    print('=' * 60)
    
    df['total_amount'] = df['quantity'] * df['unit_price']
    
    # 按品类统计
    category_stats = df.groupby('product_category').agg({
        'quantity': 'sum',
        'total_amount': 'sum',
        'order_id': 'count'
    }).sort_values('total_amount', ascending=False)
    
    category_stats.columns = ['销量', '销售额', '订单数']
    print(category_stats.round(2))
    
    # 计算占比
    category_stats['占比'] = (category_stats['销售额'] / category_stats['销售额'].sum() * 100).round(1)
    print('\\n品类销售占比:')
    for category, row in category_stats.iterrows():
        bar = '█' * int(row['占比'] / 2)
        print(f'{category:10s} | {bar} {row["占比"]}%')

def region_analysis(df):
    """区域分析"""
    print('\\n' + '=' * 60)
    print('区域销售分析')
    print('=' * 60)
    
    df['total_amount'] = df['quantity'] * df['unit_price']
    
    region_stats = df.groupby('region').agg({
        'total_amount': 'sum',
        'quantity': 'sum',
        'customer_id': 'nunique'
    }).sort_values('total_amount', ascending=False)
    
    region_stats.columns = ['销售额', '销量', '客户数']
    print(region_stats.round(2))

def customer_segment_analysis(df):
    """客户分层分析"""
    print('\\n' + '=' * 60)
    print('客户分层分析')
    print('=' * 60)
    
    df['total_amount'] = df['quantity'] * df['unit_price']
    
    segment_stats = df.groupby('customer_segment').agg({
        'total_amount': ['sum', 'mean'],
        'customer_id': 'nunique',
        'order_id': 'count'
    })
    
    segment_stats.columns = ['总销售额', '平均订单', '客户数', '订单数']
    segment_stats['客单价'] = (segment_stats['总销售额'] / segment_stats['订单数']).round(2)
    
    print(segment_stats.round(2))

def channel_analysis(df):
    """渠道分析"""
    print('\\n' + '=' * 60)
    print('渠道销售分析')
    print('=' * 60)
    
    df['total_amount'] = df['quantity'] * df['unit_price']
    
    channel_stats = df.groupby('channel').agg({
        'total_amount': 'sum',
        'order_id': 'count',
        'customer_id': 'nunique'
    }).sort_values('total_amount', ascending=False)
    
    channel_stats.columns = ['销售额', '订单数', '客户数']
    channel_stats['转化率'] = (channel_stats['订单数'] / channel_stats['客户数'] * 100).round(1)
    
    print(channel_stats.round(2))

def main():
    """主函数"""
    print('电商销售数据分析脚本')
    print('=' * 60)
    
    # 加载数据
    df = load_sales_data()
    if df is None:
        return
    
    # 数据分析
    data_overview(df)
    sales_summary(df)
    category_analysis(df)
    region_analysis(df)
    customer_segment_analysis(df)
    channel_analysis(df)
    
    print('\\n' + '=' * 60)
    print('分析完成！')
    print('=' * 60)

if __name__ == '__main__':
    main()