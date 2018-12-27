# README

## groups

|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, foreign_key: true|
|group_menber|integer|null: false, foreign_key: true|


### Association
- has_many :members
- has_many :users
- has_many :commens

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
|email|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
|nickname|integer|null: false, foreign_key: true|

### Association
- has_many :comments
- has_many :members
- has_many :groups

-----------------------------------------------------

## comments
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|text|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
-belongs_to :user






