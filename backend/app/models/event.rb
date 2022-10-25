class Event < ApplicationRecord

    has_many :event_user
    has_many :users, through: :event_user
    has_one :location
    has one :event_type
end
