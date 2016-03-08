class User < ApplicationRecord
  has_secure_password
  validates :password, presence: true, on: :create
end
