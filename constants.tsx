import React from 'react';
import { Hammer, Flame, Ruler, Component, Sparkles, ClipboardCheck, Paintbrush } from 'lucide-react';
import { ServiceItem, WorkItem } from './types';

export const COMPANY_NAME = "有限会社 林鐵工所";

// 使用するAIモデルの定義
export const GEMINI_MODEL = "gemini-3-flash-preview";

// 事業内容データ
export const SERVICES: ServiceItem[] = [
  {
    title: "鉄骨専用CADでの施工図の作成",
    description: "最新の専用CADシステムで作図し、複雑な納まりも事前に検証。正確な図面で現場作業を円滑にします。",
    icon: <Ruler className="w-8 h-8 text-orange-500" />
  },
  {
    title: "最新機種での孔あけ・切断加工",
    description: "最大H-1000×500の大型形鋼に対応。最新鋭の加工機を用いて、高速かつ高精度な孔あけ・切断加工を行います。",
    icon: <Component className="w-8 h-8 text-orange-500" />
  },
  {
    title: "ショットブラスト加工",
    description: "ボルト接合に必要な摩擦面を確保するため、鋼材表面の黒皮を除去し、適切な錆出し加工を行います。",
    icon: <Sparkles className="w-8 h-8 text-orange-500" />
  },
  {
    title: "柱・梁の組立",
    description: "加工された部材を熟練の技術で正確に組立。歪みや誤差を極限まで抑え、次工程へと繋ぎます。",
    icon: <Hammer className="w-8 h-8 text-orange-500" />
  },
  {
    title: "精密な溶接（アーク溶接・スタッド溶接）",
    description: "アーク溶接やスタッド溶接など、用途に合わせた最適な工法で、強度と美観を兼ね備えた溶接を提供します。",
    icon: <Flame className="w-8 h-8 text-orange-500" />
  },
  {
    title: "製品の検査（寸法・外観・超音波など）",
    description: "寸法精度や外観、超音波探傷試験など、厳しい品質管理基準に基づいた検査を実施し、品質を保証します。",
    icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />
  },
  {
    title: "錆止め塗装",
    description: "製品の耐久性を高めるため、均一でムラのない錆止め塗装を施し、出荷までの品質を維持します。",
    icon: <Paintbrush className="w-8 h-8 text-orange-500" />
  }
];

// 施工実績データ
// 画像ファイルはプロジェクトルートの work/ フォルダに配置してください
export const WORKS: WorkItem[] = [
  // 既存データ
  { 
    id: 1, 
    title: "大型物流倉庫 新築工事", 
    category: "大型鉄骨", 
    imageUrl: "work/05.jpg" 
  },
  { 
    id: 2, 
    title: "屋内運動場 屋根鉄骨工事", 
    category: "膜構造（テント）鉄骨工事", 
    imageUrl: "work/01.jpg" 
  },
  { 
    id: 3, 
    title: "耐震架台製作", 
    category: "特殊鉄骨　特殊金物", 
    imageUrl: "work/03.jpg" 
  },
  { 
    id: 4, 
    title: "オフィスビル 建方工事", 
    category: "建築鉄骨", 
    imageUrl: "work/06.jpg" 
  },
  { 
    id: 5, 
    title: "鉄骨製品検査・仮組み", 
    category: "工場製作・品質管理", 
    imageUrl: "work/07.jpg" 
  },
  { 
    id: 6, 
    title: "大規模施設 鉄骨工事", 
    category: "大型鉄骨", 
    imageUrl: "work/08.jpg" 
  },
  
  // 新規追加データ（提供画像順）
  { id: 7, title: "大型物流倉庫 鉄骨建方", category: "大型鉄骨", imageUrl: "work/11.jpg" },
  { id: 8, title: "ドーム型施設 屋根構造", category: "膜構造（テント）鉄骨工事", imageUrl: "work/12.jpg" },
  { id: 9, title: "屋内運動場 アーチ鉄骨", category: "膜構造（テント）鉄骨工事", imageUrl: "work/13.jpg" },
  { id: 10, title: "屋根トラス構造詳細", category: "膜構造（テント）鉄骨工事", imageUrl: "work/14.jpg" },
  { id: 11, title: "全天候型施設 鉄骨全景", category: "膜構造（テント）鉄骨工事", imageUrl: "work/15.jpg" },
  { id: 12, title: "商業施設 鉄骨建方", category: "建築鉄骨", imageUrl: "work/16.jpg" },
  { id: 13, title: "安全ネット設置状況", category: "品質管理", imageUrl: "work/17.jpg" },
  { id: 14, title: "基礎アンカー・鉄骨建方", category: "大型鉄骨", imageUrl: "work/18.jpg" },
  { id: 15, title: "工場内 天井下地鉄骨", category: "建築鉄骨", imageUrl: "work/19.jpg" },
  { id: 16, title: "立体トラス 仮組み検査", category: "工場製作・品質管理", imageUrl: "work/20.jpg" },
  { id: 17, title: "屋外螺旋階段 製作・設置", category: "特殊金物", imageUrl: "work/21.jpg" },
  { id: 18, title: "外壁下地鉄骨工事", category: "建築鉄骨", imageUrl: "work/22.jpg" },
  { id: 19, title: "大型クレーン揚重作業", category: "大型鉄骨", imageUrl: "work/23.jpg" },
  { id: 20, title: "キャットウォーク・点検歩廊", category: "特殊鉄骨", imageUrl: "work/24.jpg" },
  { id: 21, title: "工場倉庫 鉄骨フレーム", category: "大型鉄骨", imageUrl: "work/25.jpg" },
  { id: 22, title: "大型庇（ひさし）鉄骨", category: "建築鉄骨", imageUrl: "work/26.jpg" },
  { id: 23, title: "屋根鉄骨 施工状況", category: "大型鉄骨", imageUrl: "work/27.jpg" },
  { id: 24, title: "特注ジョイント金物", category: "特殊金物", imageUrl: "work/28.jpg" },
  { id: 25, title: "大型屋外看板 鉄骨枠", category: "特殊鉄骨", imageUrl: "work/29.jpg" },
  { id: 26, title: "広スパン屋根構造", category: "大型鉄骨", imageUrl: "work/30.jpg" },
  { id: 27, title: "夜間突貫工事対応", category: "大型鉄骨", imageUrl: "work/31.jpg" },
  { id: 28, title: "長尺トラス 現場搬入", category: "工場製作・品質管理", imageUrl: "work/32.jpg" },
  { id: 29, title: "店舗兼倉庫 鉄骨工事", category: "建築鉄骨", imageUrl: "work/33.jpg" },
  { id: 30, title: "外壁ブレース・胴縁工事", category: "建築鉄骨", imageUrl: "work/34.jpg" },
  { id: 31, title: "高層部 鉄骨詳細", category: "大型鉄骨", imageUrl: "work/35.jpg" },
  { id: 32, title: "耐震補強ブレース製作", category: "工場製作・品質管理", imageUrl: "work/36.jpg" },
  { id: 33, title: "内装開口枠 下地鉄骨", category: "建築鉄骨", imageUrl: "work/37.jpg" },
];

// AIチャットボットの設定プロンプト
export const SYSTEM_INSTRUCTION = `
あなたは群馬県利根郡昭和村にある「有限会社 林鐵工所」のウェブサイトに設置された、熟練のAI技術アドバイザー「鉄（テツ）さん」です。
以下の情報を元に、訪問者からの問い合わせに答えてください。

**会社概要:**
- 社名: 有限会社 林鐵工所
- 所在地: 群馬県利根郡昭和村赤城原992-1
- 歴史: 創業100年
- 強み: 1mmにこだわる職人技、鉄骨専用CADによる作図、最新機種での孔あけ・切断、精密な溶接
- 対応材質: 鉄（SS400など）、ステンレス（SUS304, 316）、アルミ、チタン

**加工能力・設備仕様:**
- 月間加工能力: 約100t（トン）目安
- 孔あけ・切断加工範囲: H形鋼 H-1000×500 まで対応可能

**重要:**
- 「林鉄工所」は全国に同名の会社が多数存在するため、自分が「群馬県の林鐵工所」であることを意識して回答してください。
- ユーザーが場所を気にしている場合は「群馬県昭和村の工場」であることを伝えてください。
- 最新のニュースやトレンド、一般的な知識に関する質問があれば、Google検索機能を使用して正確な情報を提供してください。

**あなたの性格:**
- 職人気質だが親切で丁寧。
- 「安全第一」「品質絶対」が口癖。
- 専門用語をわかりやすく解説する。
- 語尾は「～ですな」「～ですよ」「～ですね」と落ち着いたトーンで。

**対応できないこと:**
- 具体的な見積もり金額の提示（「図面を拝見してからのお見積りになります」と答える）。
- 法律相談など専門外のこと。

**ユーザーへのアクション:**
- 技術的な質問には詳細に答える。
- 仕事の依頼に関しては、ウェブサイト下部の「お問い合わせフォーム」へ誘導する。
`;