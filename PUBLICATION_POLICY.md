# Public Publication Policy

## 白名單發布

此 repository 採白名單，而不是「先全部公開再排除秘密」。只有明確選定、整理、掃描過的頁面才可進入 Public repo。

## 禁止發布

- 密碼、Token、API Key、OAuth credential、Session、Cookie。
- 個人帳號識別資料、私人 Calendar / Task / Email 內容。
- 本機使用者名稱、絕對路徑、私人 Vault 位置。
- 私人 repository URL、未公開 Issue / PR、未公開原始證據。
- 未確認是否安全的 runtime configuration。

## 允許發布

- 已整理的工程方法、設計決策、踩坑與解法。
- 已公開的 GitHub repository、GitHub Pages 與公開文件。
- 經去識別化的案例與測試方法。

## 發布流程

Private source → 挑選文章 → 去識別化／敏感資訊掃描 → Public branch → PR → diff review → Squash Merge → GitHub Pages。

Public repo 永遠不是完整私人知識庫的替代品，也不反向覆蓋私人來源。
