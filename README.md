# README

## groups

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|


### Association
- has_many :members
- has_many :commens
- has_many :users, through: :members

----------------------------------------------------

## members

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

----------------------------------------------------
## users

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|
|nickname|string|null: false, foreign_key: true|

### Association
- has_many :comments
- has_many :members
- has_many :groups,through: :members

-----------------------------------------------------

## comments
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|text|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
-belongs_to :user
-belongs_to :group






