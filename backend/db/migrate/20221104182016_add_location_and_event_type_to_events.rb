class AddLocationAndEventTypeToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :event_users, :event_id, :integer
    add_column :event_users, :user_id, :integer
    add_foreign_key :event_users, :events
    add_foreign_key :event_users, :users
  end
end
