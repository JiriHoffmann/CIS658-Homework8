class User < ApplicationRecord
    has_many :bugs
    validates :lname, presence: true
    validates :fname, presence: true
    validates :email, presence: true
end
