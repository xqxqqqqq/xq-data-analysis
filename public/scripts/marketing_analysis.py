#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
营销活动数据分析脚本
数据分析学习网站示例代码
"""

import pandas as pd
import numpy as np

def load_campaign_data(file_path='datasets/marketing_campaign.csv'):
    """加载营销活动数据"""
    try:
        df = pd.read_csv(file_path)
        print(f'数据加载成功，共 {len(df)} 条记录')
        return df
    except Exception as e:
        print(f'数据加载失败: {e}')
        return None

def campaign_overview(df):
    """营销活动概览"""
    print('=' * 60)
    print('营销活动概览')
    print('=' * 60)
    
    print('\\n活动列表:')
    for _, row in df.iterrows():
        print(f"{row['campaign_id']}: {row['campaign_name']} ({row['channel']})")

def campaign_performance(df):
    """活动效果分析"""
    print('\\n' + '=' * 60)
    print('活动效果分析')
    print('=' * 60)
    
    # 计算关键指标
    df['ctr'] = (df['clicks'] / df['impressions'] * 100).round(2)
    df['conversion_rate'] = (df['conversions'] / df['clicks'] * 100).round(2)
    df['cpc'] = (df['budget'] / df['clicks']).round(2)
    df['cpa'] = (df['budget'] / df['conversions']).round(2)
    df['roi'] = ((df['revenue'] - df['budget']) / df['budget'] * 100).round(1)
    df['profit'] = df['revenue'] - df['budget']
    
    # 按ROI排序
    performance = df[['campaign_id', 'campaign_name', 'channel', 'budget', 
                      'revenue', 'profit', 'roi', 'ctr', 'conversion_rate', 'cpc', 'cpa']]
    performance = performance.sort_values('roi', ascending=False)
    
    print(performance.to_string(index=False))

def channel_comparison(df):
    """渠道对比分析"""
    print('\\n' + '=' * 60)
    print('渠道对比分析')
    print('=' * 60)
    
    df['ctr'] = (df['clicks'] / df['impressions'] * 100).round(2)
    df['conversion_rate'] = (df['conversions'] / df['clicks'] * 100).round(2)
    df['roi'] = ((df['revenue'] - df['budget']) / df['budget'] * 100).round(1)
    
    channel_stats = df.groupby('channel').agg({
        'budget': 'sum',
        'revenue': 'sum',
        'impressions': 'sum',
        'clicks': 'sum',
        'conversions': 'sum',
        'ctr': 'mean',
        'conversion_rate': 'mean',
        'roi': 'mean'
    }).round(2)
    
    channel_stats['profit'] = channel_stats['revenue'] - channel_stats['budget']
    channel_stats = channel_stats.sort_values('roi', ascending=False)
    
    print(channel_stats)

def budget_analysis(df):
    """预算分析"""
    print('\\n' + '=' * 60)
    print('预算分析')
    print('=' * 60)
    
    total_budget = df['budget'].sum()
    total_revenue = df['revenue'].sum()
    total_profit = total_revenue - total_budget
    overall_roi = (total_profit / total_budget * 100).round(1)
    
    print(f'总预算: {total_budget:,.0f}元')
    print(f'总收入: {total_revenue:,.0f}元')
    print(f'总利润: {total_profit:,.0f}元')
    print(f'整体ROI: {overall_roi}%')
    
    # 预算分配
    print('\\n预算分配:')
    for _, row in df.iterrows():
        percentage = (row['budget'] / total_budget * 100).round(1)
        print(f"{row['campaign_name']}: {row['budget']:,.0f}元 ({percentage}%)")

def best_performers(df):
    """最佳表现活动"""
    print('\\n' + '=' * 60)
    print('最佳表现活动')
    print('=' * 60)
    
    df['roi'] = ((df['revenue'] - df['budget']) / df['budget'] * 100).round(1)
    df['profit'] = df['revenue'] - df['budget']
    
    # 按ROI排序
    top_roi = df.sort_values('roi', ascending=False).head(3)
    print('\\n最高ROI活动:')
    for _, row in top_roi.iterrows():
        print(f"{row['campaign_name']}: ROI {row['roi']}%, 利润 {row['profit']:,.0f}元")
    
    # 按利润排序
    top_profit = df.sort_values('profit', ascending=False).head(3)
    print('\\n最高利润活动:')
    for _, row in top_profit.iterrows():
        print(f"{row['campaign_name']}: 利润 {row['profit']:,.0f}元, ROI {row['roi']}%")

def main():
    """主函数"""
    print('营销活动数据分析脚本')
    print('=' * 60)
    
    # 加载数据
    df = load_campaign_data()
    if df is None:
        return
    
    # 数据分析
    campaign_overview(df)
    campaign_performance(df)
    channel_comparison(df)
    budget_analysis(df)
    best_performers(df)
    
    print('\\n' + '=' * 60)
    print('分析完成！')
    print('=' * 60)

if __name__ == '__main__':
    main()