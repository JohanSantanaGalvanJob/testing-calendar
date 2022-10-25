class AddEventTypeToEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :event_type, :string
    add_column :events, :location, :string
  end
end
